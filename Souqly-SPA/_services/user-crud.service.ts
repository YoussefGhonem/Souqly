import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '_models/user';
import { environment } from 'src/environments/environment';
import { UserForManage } from '_models/UserForManage';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
 nstd:User[]=[];
 ed:User;
 url:string = environment.ApiUrl + 'api/Users/';
  constructor( private http:HttpClient) { }

  getAll()
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };

   
      return this.http.get<User[]>(this.url+'GetAll',httpOptions);
  }
  ////////////////////////////
  getSuppliers()
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
      return this.http.get<User[]>(this.url+'GetByRole',httpOptions);
  }
  /////////////////////////////////////////////
  getUserDataById(id:number)
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    console.log(id);
    return this.http.get<User>(this.url+'GetUserData/'+id,httpOptions)
  }
  editUserDataById(id:number,ed:User)
  {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    console.log("ddddddddddddddddddddd");
    return this.http.post<User>(this.url+'editUser/'+id,ed, httpOptions)
  }
  deleteUser(id:number)
  {
    
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });
    const httpOptions = {
      headers: headers_object
    };
    
   return this.http.delete<User>(this.url+'deleteUser/'+id,httpOptions)
  }
}
