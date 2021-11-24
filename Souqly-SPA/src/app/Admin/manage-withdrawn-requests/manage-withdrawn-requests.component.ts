import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserForWithdrawRequest } from '_models/ola/UserForWithdrawRequest';
import { AdminServiceService } from '_services/admin-service.service';

@Component({
  selector: 'app-manage-withdrawn-requests',
  templateUrl: './manage-withdrawn-requests.component.html',
  styleUrls: ['./manage-withdrawn-requests.component.css'],
  providers: [MessageService]
})
export class ManageWithdrawnRequestsComponent implements OnInit {
  actions:string[] = ["confirm", "disConfirm", "reject"];
  typeOfAction:string;

  requests:UserForWithdrawRequest[];
  notConfirmedRequests:UserForWithdrawRequest[]=[];
  confirmedRequests:UserForWithdrawRequest[]=[];
  displayedTable:string = "nonConfirmed";
  returnedReq:UserForWithdrawRequest;
  index:number;

  cols:any[];
  options:string[] = [
    "confirmed",
    "nonConfirmed",
    "all"
  ]
  reqId:number;
  constructor(private adminService:AdminServiceService, private router:Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.adminService.getWithdrawRequests().subscribe(
      d => {
        this.requests = d;
        d.forEach(x => x.confirmed? this.confirmedRequests.push(x): this.notConfirmedRequests.push(x)); 
       
      } 
    );
      
    this.cols = [
      { field: 'fullName', header: 'اسم العميل' },
      { field: 'userRole', header: 'الوظيفة' },
      { field: 'money', header: 'المبلغ المراد سحبه' }, 
    ];
  }

  showDetails(userName:string){
    var user = this.requests.find(r => r.userName == userName);
    
    this.router.navigateByUrl('/userdata', { state: user });
  }

  showConfirm(reqId:number, type:string){
    this.typeOfAction = type;
    this.index = (type == this.actions[0] || type == this.actions[2]?
                          this.notConfirmedRequests.findIndex(x => x.requestId == reqId):
                          this.confirmedRequests.findIndex(x => x.requestId == reqId));
    this.returnedReq = (type == this.actions[0] || type == this.actions[2]? 
                          this.notConfirmedRequests[this.index] : 
                          this.confirmedRequests[this.index]);

    this.reqId = reqId;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'هل انت متأكد', detail:'قم بالتأكيد للمتابعة'});
  }

  onConfirm(){
    var i = this.requests.findIndex(r => r.requestId == this.returnedReq.requestId);
    if(this.typeOfAction == this.actions[0]){ //confirm
      this.notConfirmedRequests.splice(this.index, 1);
      this.returnedReq.confirmed = true;
      this.confirmedRequests.push(this.returnedReq);
      this.requests[i].confirmed = true;

      this.adminService.confirmWithdrawRequests(this.reqId).subscribe(_ => null, _ =>{
        this.returnedReq.confirmed = false;
        this.notConfirmedRequests.push(this.returnedReq);
        this.confirmedRequests.pop();
        this.requests[i].confirmed = false;
        alert("A problem has happened, please try again");
      });

    }
    else if(this.typeOfAction == this.actions[1]){ //cancel confirm
      this.confirmedRequests.splice(this.index, 1);
      this.returnedReq.confirmed = false;
      this.notConfirmedRequests.push(this.returnedReq);
      this.requests[i].confirmed = false;

      this.adminService.cancelConfirmWithdrawRequest(this.reqId).subscribe(_ => null, _ =>{
        this.returnedReq.confirmed = true;
        this.confirmedRequests.push(this.returnedReq);
        this.notConfirmedRequests.pop();
        this.requests[i].confirmed = true;
        alert("A problem has happened, please try again");
      });

    }
    else{
      alert("hi");
      this.notConfirmedRequests.splice(this.index, 1);
      this.requests.splice(i, 1);

      this.adminService.rejectWithdrawRequest(this.reqId).subscribe(_ => null, _ =>{      
        this.notConfirmedRequests.push(this.returnedReq);
        this.requests.push(this.returnedReq);
        alert("A problem has happened, please try again");
      });
    }
    
      
    this.messageService.clear('c');
  }

  onReject(){
    this.messageService.clear('c');
  }
}
