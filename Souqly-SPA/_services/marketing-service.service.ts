import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { UserForManage } from "_models/UserForManage";
import { AuthServicesService } from "./AuthServices.service";

@Injectable({
  providedIn: 'root'
})

export class MarketingService {
  constructor(private http: HttpClient, private authService:AuthServicesService){
  }
  url:string = environment.ApiUrl + 'MAccountManage/';
  SupplierId:number;

  getAllData(){
    var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

  const httpOptions = {
    headers: headers_object
  };

     return this.http.get<UserForManage>(this.url,httpOptions);
  }

  UpdateData(updateduser : UserForManage)
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    return this.http.put<UserForManage>(this.url, updateduser,httpOptions);

  }




}
