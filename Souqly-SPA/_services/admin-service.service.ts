import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserForWithdrawRequest } from '_models/ola/UserForWithdrawRequest';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url:string = environment.ApiUrl + 'Dashboard/';
  UserId:number;
  constructor(private http: HttpClient) { }
  apiURL = environment.ApiUrl + "Cart/";
  OrderURL= environment.ApiUrl + "Order/";
  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

 httpOptions = { headers: this.headers_object };
  apiUrl = environment.ApiUrl + "AdminMCategories/";


  getWithdrawRequests(){

    return this.http.get<UserForWithdrawRequest[]>(this.url+"GetWithdrawRequests",this.httpOptions)
  }

  confirmWithdrawRequests(reqId:number){

    return this.http.put(this.url+"ConfirmWithdrawRequest", reqId);
  }

  cancelConfirmWithdrawRequest(reqId:number){

    return this.http.put(this.url+"CancelConfirmWithdrawRequest", reqId);
  }

  rejectWithdrawRequest(reqId:number){

    return this.http.delete(this.url+"RefuseWithdrawRequest/"+reqId);
  }

}
