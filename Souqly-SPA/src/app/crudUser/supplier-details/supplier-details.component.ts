import { Component, OnInit } from '@angular/core';
import { User } from '_models/user';
import { AuthServicesService } from '_services/AuthServices.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  nstd:User []=[]
  status:string;

  constructor( private supserv:UserCrudService , private auth:AuthServicesService) { }

  ngOnInit(): void {
    this.supserv.getSuppliers().subscribe(a=>{
   a.forEach(e => {e.roleName="Supplier"
   this.auth.decodedToken.role=e.roleName;

   });
    this.nstd=a;
      
    })
  
   
  }

}
