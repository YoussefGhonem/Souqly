import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '_models/Order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order:Order[];
  constructor(private resolve:ActivatedRoute) { }

  ngOnInit(): void {
    this.resolve.data.subscribe(
      data=>{
        this.order=data['order']
      }
    )
  }

}
