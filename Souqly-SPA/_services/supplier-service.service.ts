import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SupplierOrder } from '_models/ola/SupplierOrder';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierOrderService{
  url:string = environment.ApiUrl + 'Supplier/';
  SupplierId:number;
  count:number;
  constructor(private http: HttpClient, private authService:AuthServicesService){   
  }
  
  getOrders(){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    this.SupplierId = this.authService.decodedToken.nameid;
    return this.http.get<SupplierOrder[]>(this.url+this.SupplierId, httpOptions);
  }

  getCountOfOrders(){   
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    this.SupplierId = this.authService.decodedToken.nameid;
    return this.http.get<number>(this.url+"count/"+this.SupplierId, httpOptions).pipe(
      map((resp:number) => this.count = resp)
    );
  }


}
