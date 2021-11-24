import { ShippingOrderDetails } from '_models/ShippingOrderDetails';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from '_services/alertifay.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-ShippingOrderDetails',
  templateUrl: './ShippingOrderDetails.component.html',
  styleUrls: ['./ShippingOrderDetails.component.css']
})
export class ShippingOrderDetailsComponent implements OnInit {

shippingOrderDetails:ShippingOrderDetails[];

//////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor( public dialogRef: DynamicDialogRef, public dialogConfig: DynamicDialogConfig , private alertifyService: AlertService) { }

//////////////////////////////////////////////////////////////////////////////////////////////////////

  ngOnInit() {

    this.shippingOrderDetails=this.dialogConfig.data;

    console.log("b3d ma gaaaat==>>"+this.dialogConfig.data);

  }//end of ngOnInit

//////////////////////////////////////////////////////////////////////////////////////////////////////

  closeModal(){

  this.dialogRef.close();

  }//end of closeModel

//////////////////////////////////////////////////////////////////////////////////////////////////////



}
