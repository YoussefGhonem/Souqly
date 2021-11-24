import { Order } from './../_models/Order';
import { catchError } from 'rxjs/operators';
import { ProductOptionCart } from './../_models/productOptionCart';
import { Router, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartMangmentService } from '_services/cart-mangment.service';

@Injectable()
export class OrderListResolver implements Resolve<Order[]>{

  constructor(private service: CartMangmentService, private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Order[]> {
    return this.service.GetAllOrders().pipe(
      catchError(
        err => {
          this.router.navigate[''];
          return of(null);
        }
      )
    )
  }

}
