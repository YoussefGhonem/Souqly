import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShippingOrdersStatus } from '_models/ShippingOrdersStatus';

@Injectable({
  providedIn: 'root'
})
export class ShippingStatusService {

  constructor(private http:HttpClient) { }

  apiUrl=environment.ApiUrl +"ShippingMOrderStatus/";

  getOrders()
  {
    return this.http.get<ShippingOrdersStatus[]>(this.apiUrl + "GetOrdersStatesForShipping");
  }


  UpdateOrderStatus(OrderId,Status)
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
  
    const httpOptions = {
      headers: headers_object
    };


    return this.http.post(this.apiUrl+ "UpdateOrder/" +OrderId+'/'+Status ,{OrderId,Status}, httpOptions);
  }



}
