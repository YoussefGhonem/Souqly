// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForManage } from '_models/UserForManage';
import { MarketingService } from '_resolvers/marketing-service.service';
import { AlertService } from '_services/alertifay.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  constructor(private marketservice: MarketingService, private router : Router, private alertifyService: AlertService) { }
  userData : UserForManage;

  ngOnInit(): void {
    this.marketservice.getAllData().subscribe(d =>{
     console.log("user",d);
      this.userData = d;
    });
  }

  Update(){

      this.marketservice.UpdateData(this.userData).subscribe(n=>{
      });
      this.alertifyService.success("تم تعديل البيـــانات بنجاح");
      setTimeout(() => {
        this.router.navigateByUrl(" ");
      }, 1000);
  }

  Cancel(){
    this.router.navigateByUrl(" ");
  }



}

