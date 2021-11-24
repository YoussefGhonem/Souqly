import { User } from './../_models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http: HttpClient) { }
  baseURL = environment.ApiUrl + 'Auth/';

  jwtHelper = new JwtHelperService();// علشان يعرف هل التوكين ده صح ولا لا
  decodedToken: any; // لفك تشفير التوكين علشان اخد المعلومات الخاصه باليوزر
  currentUser: User;

  login(model: any){
    return this.http.post(this.baseURL + 'login', model).pipe( // use pip becouse api return values(token,user)
      map((response: any) => {
        const user = response;//all data from Api
        if (user) {
          //و هنا باخد الحجات اللي جايه من الدوت نت واعملها حفظ ف اللوكال استوريدج
          localStorage.setItem('token', user.token);  // save token from api in localStorage
          localStorage.setItem('user', JSON.stringify(user.user)) // save user info from api in localStorage
          // لفك تشفير التوكين علشان اخد المعلومات الخاصه باليوزر
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          // save user info from api in variable
          //this.currentUser = user.user;
          this.currentUser = user.user;
        }
      }))
  }

  loggedIn() {
    try {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    }
    catch {
      return false;
    }
  }

  roleMatch(AllowedRoles: Array<string>): boolean {
    let isMatch = false;
    const userRoles = this.decodedToken.role as Array<string>;
    AllowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }

  register(user: User) {
    return this.http.post(this.baseURL + 'register', user);
  }



}
