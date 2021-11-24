import { AuthServicesService } from './../../_services/AuthServices.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthServicesService, private authService:AuthServicesService) { 
    
  }

  jwtHelperService = new JwtHelperService();

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token)
      this.auth.decodedToken = this.jwtHelperService.decodeToken(token);
    if (user)
      this.authService.currentUser = user;      
  }
}
