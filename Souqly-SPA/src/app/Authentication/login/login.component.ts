import { AuthServicesService } from './../../../../_services/AuthServices.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HasRoleDirective } from '_directives/has-role.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model: any = {};

  errorMsg = "";
  constructor(private service: AuthServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.model).subscribe(
      () => {
        this.router.navigate(['']);
      }, (error) => {

        if (error.error.toString() == "[object Object]") {
          this.errorMsg = "يجب عليك إدخال جميع البيانات"
        } else {
          this.errorMsg = error.error;
        }

      },
     
      () => {
        if(this.service.decodedToken.role=="Admin")
        {
         this.router.navigate(['/dashboard'])
        }
        else if(this.service.decodedToken.role=="Supplier")
        {
         
           this.router.navigate(['/uploadproduct'])
          
        }
        else if(this.service.decodedToken.role=="Marketing")
        {
         
           this.router.navigate(['products'])
          
        }
        else if(this.service.decodedToken.role=="Marketing")
        {
         
           this.router.navigate(['/bindingorders'])
          
        }
        
        
        
        }
    )
}
}
