import { Component, OnInit } from '@angular/core';
import { SaveEditableRow } from 'primeng/table';
import { Visa } from '_models/visa';
import { VisaService } from '_services/visa.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 obj:Visa=new Visa()
  constructor(private servisevisa:VisaService) { }

  ngOnInit(): void {
   
  }
  save()
  {  console.log( "obj",this.obj);
    console.log("*******************************************************************");
    this.servisevisa.paymentpost(this.obj).subscribe(s=>{
      console.log(this.obj);
     
   });
  }


}
