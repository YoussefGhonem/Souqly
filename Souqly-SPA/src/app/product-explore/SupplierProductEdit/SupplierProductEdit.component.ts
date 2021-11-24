import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Option } from './../../../../_models/ola/option';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '_models/ola/Product';
import { AlertService } from '_services/alertifay.service';
import { ProductServiceService } from '_services/product-service.service';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-SupplierProductEdit',
  templateUrl: './SupplierProductEdit.component.html',
  styleUrls: ['./SupplierProductEdit.component.css'],
  styles: [`
  :host ::ng-deep .p-cell-editing {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
  }
`],
  providers: [MessageService],
})
export class SupplierProductEditComponent implements OnInit {

  product: Product;

  cols: any[];

  responsiveOptions: any[] = [
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

  clonedProducts: { [s: string]: Option; } = {};
  option:Option;
/////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private productService: ProductServiceService,
    public dialogRef: DynamicDialogRef, public dialogConfig: DynamicDialogConfig ,
    private alertifyService: AlertService,
    private messageService: MessageService,
    private router:Router,
    private http:HttpClient) { }

/////////////////////////////////////////////////////////////////////////////////////////////////

  ngOnInit() {

    this.product = this.dialogConfig.data;
    console.log("Edit==3==>>"+this.product.options);

  }//end of ngOnInit

/////////////////////////////////////////////////////////////////////////////////////////////////

   closeModal(){
        this.dialogRef.close();
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(["supplierProductsList"]);
      });

}//end of closeModal

/////////////////////////////////////////////////////////////////////////////////////////////////

onRowEditInit(optionEdited:Option) {

  this.option=optionEdited;
  console.log(this.option.id+" "+this.option.name);

}//end of onRowEditInit

/////////////////////////////////////////////////////////////////////////////////////////////////

onRowEditSave(option:Option) {

  if (option.itemPrice > 0 && option.name != "" && option.stockIn > 0) {
      //delete this.clonedProducts[product.id];
      // this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
      this.productService.editOption(option).subscribe(a=>{
        this.alertifyService.success("Done");
      });

  }
  else {
      this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
      this.alertifyService.error("Error");
   }

}//end of onRowEditSave

/////////////////////////////////////////////////////////////////////////////////////////////////

onRowEditCancel(product:Option) {




}//end of onRowEditCancel

/////////////////////////////////////////////////////////////////////////////////////////////////




}