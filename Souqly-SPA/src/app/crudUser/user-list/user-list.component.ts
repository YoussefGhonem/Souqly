import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '_models/user';
import { AlertService } from '_services/alertifay.service';
import { AuthServicesService } from '_services/AuthServices.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 nstd:User[]=[];
 id:number;
 nnstd:User;
 
  constructor(private serve:AuthServicesService , private autserve:UserCrudService , private rout:Router , private alert:AlertService) { }

  ngOnInit(): void {
  
    this.autserve.getAll().subscribe(a=>{this.nstd=a});

  }
 
  delete(ar:User)
  {     
    console.log(this.serve.currentUser ) ;
          this.id=ar.id;
      if(ar.userName=="Admin")
  
      { 
         console.log(this.id)
    
        this.rout.navigateByUrl("/UserList");
        this.alert.success("لا يمكنك حذف  او  تعديل بيانات الادمن");
      }
      else
      {
        this.rout.navigateByUrl("UserList/deleteUser/"+this.id);
      }    
  }
  ///////////////////////////
  detail(ar:User)
  { 
          this.id=ar.id;
      if(ar.userName=="Admin")
  
      { 
         console.log(this.id)
    
        this.rout.navigateByUrl("/UserList");
        this.alert.success("لا يمكنك حذف  او  تعديل بيانات الادمن");
      }
      else
      {
        this.rout.navigateByUrl("UserList/editUser/"+this.id);
      }    
  }

}
