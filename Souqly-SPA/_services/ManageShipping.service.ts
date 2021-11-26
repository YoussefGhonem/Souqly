import { ShippingCompanies } from './../_models/ShippingCompanies';
import { BindingOrders } from './../_models/BindingOrders';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServicesService } from './AuthServices.service';
import { ShippingOrderDetails } from '_models/ShippingOrderDetails';

@Injectable({
  providedIn: 'root'
})
export class ManageShippingService {

constructor(private http: HttpClient, private authService:AuthServicesService) { }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  GetAllBindingOrders(){

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };

   return this.http.get<BindingOrders[]>('https://localhost:44309/api/Shipping/GetBindingOrders',httpOptions);

  }//end of GetAllBindingOrders

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  GetAllShippingCompanies(){

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };

    return this.http.get<ShippingCompanies[]>('https://localhost:44309/api/Shipping/GetAllShippingCompanies',httpOptions); //return companies

  }//end of GetAllShippingCompanies

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ShippingOrder(orderNumber:number,one:string,two:number){

  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

  const httpOptions = { headers: headers_object };

  console.log("===========|==>>"+orderNumber+one+two);
                                                                                                     
  return this.http.post('https://localhost:44309/api/Shipping/MakeOrderInShipping/'+orderNumber+'/'+one+'/'+two,{orderNumber,one,two},httpOptions); //return companies

}//end of GetAllShippingCompanies

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ShippingOrderDetails(id:number)
{
  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

  const httpOptions = { headers: headers_object };

  return this.http.get<ShippingOrderDetails[]>('https://localhost:44309/api/Shipping/GetShippingOrderDetails/'+id,httpOptions);//???????   les hakaml


}//end of ShippingOrderDetails

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}//end of ManageShippingService