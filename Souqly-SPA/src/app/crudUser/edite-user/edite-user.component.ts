import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '_models/user';
import { UserForManage } from '_models/UserForManage';
import { AlertService } from '_services/alertifay.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-edite-user',
  templateUrl: './edite-user.component.html',
  styleUrls: ['./edite-user.component.css']
})
export class EditeUserComponent implements OnInit {
  userData : User;
  data:string;
  nstd:User;
 mname="block"
 emailConf:string;
 //event handler for the select element's change event
 selectChangeHandler (event: any ) {
  //update the ui
  this.userData.emailConfirmed = event.target.value;
 }
  
  constructor(private userserve:UserCrudService , private rout:Router , private alert:AlertService , private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe(p=>{ 
      console.log(p.id);
      this.userserve.getUserDataById(p.id).subscribe(a=>{this.userData=a;});
     
  })
}
  Update(){
   //event handler for the select element's change event
  
   this.emailConf=this.userData.email;
   
   this.mname=this.userData.userName
   console.log(this.emailConf);
   if(this.userData.emailConfirmed==false)
   {
    this.userData.normalizedUserName="block";
    //this.rout.navigateByUrl("/login ");
   }
   else{
    this.userData.normalizedUserName=this.userData.userName
   }
  

    this.ac.params.subscribe(p=>{ 
      
    this.userserve.editUserDataById(p.id,this.userData).subscribe(n=>{
      this.userData=n;
      console.log(this.userData);
    });
  })
    this.alert.success("تم تعديل البيـــانات بنجاح");
    setTimeout(() => {
      this.rout.navigateByUrl("/dashboard");
    }, 1000);

}

Cancel(){
  this.rout.navigateByUrl(" ");
}

}
