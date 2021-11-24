import { Component, Input, OnInit } from '@angular/core';
import { Product } from '_models/ola/Product';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ProductOptionComponent } from '../product-options/product-options.component';
import { config } from 'rxjs';
import { CartMangmentService } from '_services/cart-mangment.service';
import { AlertService } from '_services/alertifay.service';
import { AddToCart } from '_models/AddToCart';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { url } from 'node:inspector';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [DialogService, MessageService]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  ref:DynamicDialogRef;

  quantity:number;
  model : AddToCart;


  constructor(private dialogService: DialogService, private messageService:MessageService , private services : CartMangmentService ,private alertifyService: AlertService ,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.quantity = 1;

  }


  showOptionsDialog(){
    this.ref = this.dialogService.open(ProductOptionComponent, {
      data: this.product,
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto", "border-radius": "40px", "padding": "30px"},
      baseZIndex: 10000,
      style: {"direction":"rtl"},
      showHeader:false
    });

  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  //Add produt to cart
  addToCart(){
  
    this.services.AddToCart( this.product.options[0].id,this.quantity).subscribe(
      suc=>{
        this.alertifyService.success("قد تمت الاضافه للسله بنجـاح")
      },e=>{
        this.alertifyService.error(e.error)
      }


    )
    //check the stockin
    //if required quantuty is available add to cart
    //else show message to user
  }

}
