import { AuthServicesService } from './../../../_services/AuthServices.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOptionCart } from '_models/productOptionCart';
import { CartMangmentService } from '_services/cart-mangment.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { NavServiceService } from '_services/NavService.service';
import { SupplierOrderService } from '_services/supplier-service.service';

@Component({
  selector: 'app-navebare',
  templateUrl: './navebare.component.html',
  styleUrls: ['./navebare.component.css']
})
export class NavebareComponent implements OnInit {

  count:number;
  products: ProductOptionCart[];
  isSupplier:boolean;
  constructor(public authService: AuthServicesService, private router: Router, private resolver: ActivatedRoute,
    private cartService: CartMangmentService,public nav:NavServiceService, private supplierService:SupplierOrderService) {

      this.loadCart();

     }

   //define connection SR
   hubConnection:HubConnection;


  ngOnInit(): void {
    // this.resolver.data.subscribe(
    //   data=>{this.products=data['options']}
    // )
    this.loadCart()

    if (this.authService.decodedToken.role == "Supplier")
      this.supplierService.getCountOfOrders().subscribe(
         d => {
           this.count = d;
         }
      );
      
   //define conction and give it api service url
    this.hubConnection=new HubConnectionBuilder().withUrl("http://localhost:5000/cart").build();

    //start Connection
    this.hubConnection.start();

    //define subscribe method to refresh
    this.hubConnection.on('refresh',()=>{
      this.loadCart();

    })



  }
  loadCart() {
    this.cartService.getOptionsFromCart().subscribe(
      succ => { this.products = succ, this.findsum(succ) },
      err => { }
    )
  }

  public total = 0;
  findsum(data) {
    this.total=0;
    this.products = data

    for (let j = 0; j < data?.length; j++) {

      this.total += this.products[j].quantity * this.products[j].option.itemPrice;
    }
  }

  disabledButton() {
    if (this.total == 0) {
      return true;
    }
    else
      return false;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  loggedOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.router.navigate(['']);
  }

  RefreshCart(){

   // this.hubConnection.invoke('refresh');
    this.loadCart()
  }


}