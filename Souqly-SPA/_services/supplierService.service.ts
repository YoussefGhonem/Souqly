import { ProductDataDto } from './../src/app/Dtos/ProductDataDto';
import { ProductOption } from './../src/app/Dtos/productOption';
import { ProductForUploadDto } from '../src/app/Dtos/ProductForUploadDto';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { SupplierOrder } from '_models/SupplierOrder';
import { AuthServicesService } from './AuthServices.service';
import { SupplierOrder } from '_models/ola/SupplierOrder';
import { Category } from 'src/app/Dtos/Categories';


@Injectable({
  providedIn: 'root'
})
export class SupplierOrderService{
  url:string = environment.ApiUrl + 'Supplier/';
  urll:string= environment.ApiUrl;
  SupplierId:number;
  constructor(private http: HttpClient, private authService:AuthServicesService){
  }

  getOrders(){
    this.SupplierId = this.authService.decodedToken.nameid;
    return this.http.get<SupplierOrder[]>(this.url+this.SupplierId);
  }



  addproduct(productForUploadDto:ProductForUploadDto){

    this.SupplierId = this.authService.decodedToken.nameid;

    // console.log( this.SupplierId );

    var headers_object = new HttpHeaders({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };
    productForUploadDto.CategoryId=3;

     var aa=productForUploadDto;
     console.log(aa);

    return this.http.post('https://localhost:44309/api/addproduct/'+this.SupplierId,productForUploadDto,httpOptions);

  }

  addnewproduct(product:ProductDataDto){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };
    
    this.SupplierId = this.authService.decodedToken.nameid;
    console.log("yes"+this.SupplierId);
    product.supplierId=this.SupplierId;
    console.log("yes"+product.supplierId);
    return this.http.post('https://localhost:44309/api/addproduct',product,httpOptions);
  }


  getallcategories(){

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };

    return this.http.get<Category[]>('https://localhost:44309/api/getallcategories',httpOptions);

  }//end of getallcategories




}