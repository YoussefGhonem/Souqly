
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{Visa} from '_models/visa';
import { AuthServicesService } from './AuthServices.service';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisaService {
  
  url = environment.ApiUrl +'api/Users/';
 
  

  constructor( private http:HttpClient , private autserve:AuthServicesService) { 
 
  }

  paymentpost(visaObj:Visa)

  {
    //console.log(visaObj);
    //return this.http.post(this.url+'paymentdetails',visaObj);
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    visaObj.id=this.autserve.decodedToken.nameid;//to take id of this token
     console.log(visaObj);
    return this.http.post(this.url + 'paymentdetails', visaObj, httpOptions);

   //return this.http.post(this.url + 'paymentdetails', visaObj, httpOptions);
  }
  getVisaDataById(id:number)
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    console.log(id);
    return this.http.get<Visa>(this.url+'GetVisaData/'+id,httpOptions)
  }
}
