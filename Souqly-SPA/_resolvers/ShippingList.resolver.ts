
import { catchError, retry } from 'rxjs/operators';

import { Shipping } from './../_models/Shipping';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartMangmentService } from '_services/cart-mangment.service';

@Injectable()
export class ShippingListResolver implements Resolve<Shipping[]>{

constructor(private services:CartMangmentService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Shipping[]> {
    return this.services.GetAllShipping().pipe(
      catchError(
        error=>{
            // this.alert.error("Sorry We Have A Problem");
            return of(null)
        }
      )



    )
  }



}