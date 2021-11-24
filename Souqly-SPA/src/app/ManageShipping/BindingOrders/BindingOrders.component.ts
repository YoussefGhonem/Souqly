import { ShippingOrderDetails } from './../../../../_models/ShippingOrderDetails';
import { ShippingOrderDetailsComponent } from './../ShippingOrderDetails/ShippingOrderDetails.component';
import { logging } from 'protractor';
import { Router } from '@angular/router';
import { ShippingCompanies } from './../../../../_models/ShippingCompanies';

import { ManageShippingService } from './../../../../_services/ManageShipping.service';
import { BindingOrders } from './../../../../_models/BindingOrders';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { AlertService } from '_services/alertifay.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-BindingOrders',
  templateUrl: './BindingOrders.component.html',
  styleUrls: ['./BindingOrders.component.css'],
  providers: [DialogService]
})
export class BindingOrdersComponent implements OnInit {

  bindingOrders: BindingOrders[];
  binOrder: BindingOrders;
  shippingCompanies: ShippingCompanies[];
  cols: any[];
  active=false;
  shippingCompany:number;
  shippingPolicy:string;
  dialogref:DynamicDialogRef;

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private _service: ManageShippingService, public router: Router, private alertifyService: AlertService , private dialogService: DialogService) { }

  //////////////////////////////////////////////////////////////////////////////////////////////////////


  ngOnInit() {


    this._service.GetAllBindingOrders().subscribe(a => {
      this.bindingOrders = a;
      console.log("-------------------------------->" + a);
    });

    this._service.GetAllShippingCompanies().subscribe(s => {
      this.shippingCompanies = s;
      console.log(this.shippingCompanies);
    });

    this.cols = [
      // { field: 'id', header: 'id' },
      { field: 'clientName', header: 'clientName' },
      { field: 'phone', header: 'phone' },
      { field: 'address', header: 'address' },
      // { field: 'billId', header: 'billId' },
      // { field: 'shippingCompaniesId', header: 'shippingCompaniesId' }

    ];



    // window.setInterval("refresh()", 10000); 	// Call a function every 10000 milliseconds (OR 10 seconds).

    // // Refresh or reload page.
    // function refresh() {
    //     window .location.reload();
    // }

  }//end of ngOnInit

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  GetOrderDetails(id: number) {
    console.log(id);

  }//end of GetOrderDetails

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  GetAllShippingCompanies() {

  }//end of GetOrderDetails

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  handleChange(e, id: number) {

    if (e.checked) {
      console.log(true);
      console.log(this.shippingCompany);
      if(this.shippingCompany == null){
        console.log("Null");
      }
      // this._service.ShippingOrder(id).subscribe(a => {

        this.alertifyService.success("تم تسليم المنتج لشركة الشحن")
     // });
      // this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      //   this.router.navigate(["bindingorders"]);
      // });
    }
    else {
      console.log(false);

    }

    var obj = this.bindingOrder.value;
    if(obj['ShippingPolicy']== ""){console.log("policyNull")}
    else{
    console.log(obj);
    }
  }//end of handleChange

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  bindingOrder=new FormGroup({
    'ShippingCompany':new FormControl('',[Validators.required]),
    'ShippingPolicy':new FormControl('',Validators.required),

  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  ShippOrder(id:number){

    var obj = this.bindingOrder.value;
    if(obj['ShippingPolicy'] == "" || obj['ShippingCompany'] == "") {
      console.log("policyNull")
      this.alertifyService.error("ادخل بيانات الشحن اولا");
    }//end of if
    else{
    console.log(obj);

    this._service.ShippingOrder(id,obj['ShippingPolicy'],obj['ShippingCompany']).subscribe(a => {

      this.alertifyService.success("تم تسليم المنتج لشركة الشحن");
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(["bindingorders"]);
      });
    });


    }//end of else

  }//end of ShippOrder

  orderdetails:ShippingOrderDetails[];

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  async showOrderDetailDialog(id:number){



    await this._service.ShippingOrderDetails(id).subscribe(a=>{

      this.orderdetails=a

      this.dialogref = this.dialogService.open(ShippingOrderDetailsComponent, {
        data: this.orderdetails,
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto", "border-radius": "40px", "padding": "30px"},
        baseZIndex: 10000,
        style: {"direction":"rtl"},
        showHeader:false
      });

    });

  }//end of showOptionsDialog

  //////////       /////     ///////      ///////    ///////       //////    ///////  ////////      ////

  ngOnDestroy() {
    if (this.dialogref) {
        this.dialogref.close();
        this.orderdetails=null;
    }
  }//end of ngOnDestroy

  //////////////////////////////////////////////////////////////////////////////////////////////////////




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

}