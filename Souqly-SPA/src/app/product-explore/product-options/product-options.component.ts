import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '_models/ola/Product';
import { AlertService } from '_services/alertifay.service';
import { CartMangmentService } from '_services/cart-mangment.service';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionComponent implements OnInit {
    // id:number;
    product: Product;

    optionId:number;
    quantity:number;

    cols: any[];

    responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

    constructor(private productService: ProductServiceService, public ref: DynamicDialogRef, public config: DynamicDialogConfig ,private services : CartMangmentService,private alertifyService: AlertService) { }

    ngOnInit() {
      this.product = this.config.data;
      this.quantity = 1;
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }

    closeModel(){
      this.ref.close();
    }


    addToCart(){
   
      this.services.AddToCart(this.optionId,this.quantity).subscribe(
        suc=>{
          this.alertifyService.success("قد تمت الاضافه للسله بنجـاح")
        },e=>{
          this.alertifyService.error(e.error)
        }


      )
    }

}
