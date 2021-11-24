import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserProfit } from '_models/ola/UserProfit';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url:string = environment.ApiUrl + 'api/Users/';
  UserId:number;
  constructor(private http: HttpClient, private authService:AuthServicesService) { }

  getProfits(){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    
    this.UserId = this.authService.decodedToken.nameid;
    return this.http.get<UserProfit>(this.url+"profits/"+this.UserId, httpOptions);
  }

  postWithdrawRequest(money:number){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    
    // this.UserId = this.authService.decodedToken.nameid;
    return this.http.post(this.url+"withdraw", money);
  }
}
