import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '_models/user';
import { Visa } from '_models/visa';
import { UserCrudService } from '_services/user-crud.service';
import { VisaService } from '_services/visa.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  visaObj:Visa=new Visa();
  nstd:User;
  constructor( private visaServ:VisaService,private userserve:UserCrudService , private ac:ActivatedRoute) {
    
   }
  
  ngOnInit(): void {
    this.ac.params.subscribe(p=>{ 
      console.log(p.id);
      this.visaServ.getVisaDataById(p.id).subscribe(a=>{this.visaObj=a;});
      this.userserve.getUserDataById(p.id).subscribe(a=>{this.nstd=a;});
  
  })
  
   
  }
    
}
