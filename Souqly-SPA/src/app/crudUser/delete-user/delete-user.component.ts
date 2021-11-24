import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '_models/user';
import { AlertService } from '_services/alertifay.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  nstd:User;
  constructor( private userserve:UserCrudService , private ac:ActivatedRoute , private alert:AlertService , private rout:Router) { }

  ngOnInit(): void {
    this.ac.params.subscribe(p=>{this.userserve.getUserDataById(p.id).subscribe(a=>{this.nstd=a;});})

    
  }
  delete(){
     
    this.ac.params.subscribe(p=>{ 
      
      this.userserve.deleteUser(p.id).subscribe(a=>{this.nstd=a;});
    
    
  })
    this.alert.success("تم حذف البيـــانات بنجاح");
    setTimeout(() => {
      this.rout.navigateByUrl("/dashboard");
    }, 1000);

}

Cancel(){
  this.rout.navigateByUrl(" ");
}


}
