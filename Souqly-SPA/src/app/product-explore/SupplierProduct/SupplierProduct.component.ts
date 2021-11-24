import { ProductServiceService } from '_services/product-service.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '_models/ola/Product';
import { AlertService } from '_services/alertifay.service';
import { SupplierProductEditComponent } from '../SupplierProductEdit/SupplierProductEdit.component';

@Component({
  selector: 'app-SupplierProduct',
  templateUrl: './SupplierProduct.component.html',
  styleUrls: ['./SupplierProduct.component.css'],
  providers: [DialogService, MessageService]
})
export class SupplierProductComponent implements OnInit {

  @Input() product: Product;
  ref: DynamicDialogRef;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private dialogService: DialogService,
    private messageService: MessageService,
    private alertifyService: AlertService,
    private router:Router,
    private service:ProductServiceService) { }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ngOnInit() {

  }//end of ngOnInit

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  showOptionsDialog() {
    this.ref = this.dialogService.open(SupplierProductEditComponent, {
      data: this.product,
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto", "border-radius": "40px", "padding": "30px" },
      baseZIndex: 10000,
      style: { "direction": "rtl" },
      showHeader: false
    });

  }
  /////////     /////////////   //////////////     //////////////    ////////////   //////////  //////////  //////

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  deleteProduct(id: number) {

    console.log(id)
      //call service to delete product
      this.service.deleteProduct(id).subscribe(a=>{

        console.log()

        this.alertifyService.success("تم حذف المنتج بنجاح");

        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(["supplierProductsList"]);
        });
      });

  }//end of deleteProduct

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}



