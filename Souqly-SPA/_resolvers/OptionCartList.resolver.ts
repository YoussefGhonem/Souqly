import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ProductOptionCart } from "_models/productOptionCart";
import { CartMangmentService } from "_services/cart-mangment.service";

@Injectable()
export class OptionCartListresolver implements Resolve<ProductOptionCart[]>{


    constructor(private service: CartMangmentService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<ProductOptionCart[]> {

      return this.service.getOptionsFromCart().pipe(

        catchError(

          err => {

            this.router.navigate[''];

            return of(null);

          }

        )

      )

    }


}
