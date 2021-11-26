
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Count } from '_models/Count';



@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient) {

   }
   apiURL = environment.ApiUrl + "Cart/";
   OrderURL= environment.ApiUrl + "Order/";
   headers_object = new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': "Bearer "+ window.localStorage.getItem('token')
   });
 
  httpOptions = { headers: this.headers_object };
 

   apiUrl =environment.ApiUrl +"Dashboard/";

   getCount()
   {

     return this.http.get<Count>(this.apiUrl + "getCounts",this.httpOptions);
   }
}
