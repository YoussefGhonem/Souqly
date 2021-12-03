import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddToCart } from '_models/AddToCart';
import { MakeOrder } from '_models/MakeOrder';
import { Order } from '_models/Order';
import { ProductOptionCart } from '_models/productOptionCart';
import { Shipping } from '_models/Shipping';

@Injectable({
  providedIn: 'root'
})
export class CartMangmentService {

  constructor(private http: HttpClient) { }
  apiURL = environment.ApiUrl + "Cart/";
  OrderURL= environment.ApiUrl + "Order/";
  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

 httpOptions = { headers: this.headers_object };


  getOptionsFromCart(): Observable<ProductOptionCart[]> {
    return this.http.get<ProductOptionCart[]>(this.apiURL + "GetProductsFromCart",this.httpOptions);
  }

  updateQuantity(id, NewQuantity) {
    return this.http.get(this.apiURL + "UpdateQuantityCart/" + id + "/" + NewQuantity,this.httpOptions);
  }

  GetAllShipping(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>(this.apiURL + "GetAllShipping",this.httpOptions);
  }


  MakeOrder(model: MakeOrder) {
    return this.http.post(this.OrderURL + 'MakeOrder' , this.httpOptions);
  }

  GetOrderDetails(id:number): Observable<Order> {
    return this.http.get<Order>(this.OrderURL + "OrderDetails/"+ id,this.httpOptions);
  }

  GetAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.OrderURL + "GetAllOrders",this.httpOptions);
  }


  DeleteAllProductCart(ids:string[])
  {
    return this.http.post(this.apiURL + 'DeleteAllProOptionFromCart' ,ids,this.httpOptions);

  }


  AddToCart(OptionId:number,Quantity:number)
  {
    return this.http.get(this.apiURL + 'AddToCart/'+OptionId +'/'+Quantity,this.httpOptions)
  }

}
