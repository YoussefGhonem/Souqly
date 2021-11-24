
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


   apiUrl =environment.ApiUrl +"Dashboard/";

   getCount()
   {

     return this.http.get<Count>(this.apiUrl + "getCounts");
   }
}
