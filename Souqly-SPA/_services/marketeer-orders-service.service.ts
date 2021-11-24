import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarketeerOrders } from '_models/MarketeerOrders';
import { OrderDetails } from '_models/OrderDetails';
import { AuthServicesService } from './AuthServices.service';



@Injectable({
  providedIn: 'root'
})

export class MarketeerOrdersServiceService {

  constructor(private http:HttpClient, private authservice:AuthServicesService) { }
  url:string = environment.ApiUrl + 'MarketeerOrders/';


  getOrders(){
    var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

  const httpOptions = {
    headers: headers_object
  };

     return this.http.get<MarketeerOrders[]>(this.url,httpOptions);
  }

}

