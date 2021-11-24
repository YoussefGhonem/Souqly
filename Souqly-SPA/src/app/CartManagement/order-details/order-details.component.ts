import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '_models/Order';
import { AuthServicesService } from '_services/AuthServices.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order:Order;
  public total = 0;
    constructor( private resolve:ActivatedRoute,public authService: AuthServicesService) { }

    ngOnInit() {

      this.resolve.data.subscribe(
        data=>{
          this.order=data['OrderDetails']
          this.findsum(data['OrderDetails'])
          // console.log(JSON.stringify(this.order.orderDetails.));
        })
    }
    findsum(data) {
      this.order = data
      for(var result of data.orderDetail){

        this.total += result.totalOptionPrice;

      }
    }

}
