import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserProfit } from '_models/ola/UserProfit';
import { UserServiceService } from '_services/user-service.service';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css'],
  providers: [MessageService]
})
export class ProfitsComponent implements OnInit {

  profitsData:UserProfit;
  money:number;
  available:boolean = true;

  constructor(private userService:UserServiceService, private messageService:MessageService) { }
  ngOnInit(): void {
    this.userService.getProfits().subscribe(
      d => this.profitsData = d
    );
    
  }

  sendRequest(){
    
    if(this.money <= this.profitsData.availableProfits){
      this.profitsData.isRequestAvailable=false;
      this.userService.postWithdrawRequest(this.money).subscribe(_ => null, _ => this.profitsData.isRequestAvailable=true);
      this.messageService.add({key: 'bc', severity:'success', summary: 'تم بنجاح', detail: 'تم إرسال الطلب بنجاح. سيتم التحويل في خلال يومين', sticky: true});
      
    }
      
    
    else
      this.messageService.add({key: 'bc', severity:'error', summary: 'حدث خطأ', detail: 'المبلغ المطلوب أكبر من المبلغ المتاح بمحفظتك'});
      
  }
}
