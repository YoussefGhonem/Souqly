import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '_models/user';
import { AlertService } from '_services/alertifay.service';
import { AuthServicesService } from '_services/AuthServices.service';

@Component({
  selector: 'app-register-shipping',
  templateUrl: './register-shipping.component.html',
  styleUrls: ['./register-shipping.component.css']
})
export class RegisterShippingComponent implements OnInit {

  registerForm: FormGroup;
  user: User;

  errorMsg="";
  constructor(private fp: FormBuilder,  private alertService:AlertService ,private authService: AuthServicesService, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  
  createRegisterForm() {
    this.registerForm = this.fp.group({
      roleName: [null, Validators.required],
      userName: [null, Validators.required],
      FirstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      phoneNumber: [null, [Validators.pattern("^[0-9]*$"), Validators.minLength(11), Validators.maxLength(11)]],
    })
  }
validate(){
  if( this.registerForm.value.roleName==null){
    this.alertService.error("يجب تحديد هويتك");
    return;
  }
}

  register() {
    debugger
    this.validate();
    if(this.registerForm.valid){
      this.user=Object.assign({},this.registerForm.value);
      this.authService.register(this.user).subscribe(
        ()=>{
          this.router.navigate(['/dashboard']);
        },  (error) => {
          this.errorMsg=error.error;

        }
      )
    }

  }



}
