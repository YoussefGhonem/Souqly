import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortEvent } from 'primeng/api';
import { pipe } from 'rxjs';
import { MarketeerOrders } from '_models/MarketeerOrders';
import { MarketeerOrdersServiceService } from '_services/marketeer-orders-service.service';

@Component({
  selector: 'app-follow-orders',
  templateUrl: './follow-orders.component.html',
  styleUrls: ['./follow-orders.component.css']
})

export class FollowOrdersComponent implements OnInit {

  constructor(private marketeeerOrdersservice: MarketeerOrdersServiceService, private router : Router) { }
    allOrders: MarketeerOrders[];
    cols: any[];
  ngOnInit(): void {
     this.marketeeerOrdersservice.getOrders().subscribe(d =>{
      this.allOrders = d;

     });

     this.cols = [
      { field: 'marktingProfits', header: 'أرباحك' },
      { field: 'status', header: 'حالة الطلب' },
      { field: 'dealPrice', header: 'المبلغ المراد تحصيله ' },
      { field: 'totalOptionPrice', header: 'قيمة المنتجات' },
      { field: 'quantity', header: 'الكمية' },
      { field: 'productName',field2:'availableOptions',field3:'code', header: 'تفاصيل الطلب' },
      { field: 'orderDate', header: 'تاريخ الطلب' , data: true , format: 'yyyy/MM/dd'  },
      { field: 'orderId', header: 'رقم الطلب' },
  ]
    }
      customSort(event: SortEvent) {
          event.data.sort((data1, data2) => {
              let value1 = data1[event.field];
              let value2 = data2[event.field];
              let result = null;

              if (value1 == null && value2 != null)
                  result = -1;
              else if (value1 != null && value2 == null)
                  result = 1;
              else if (value1 == null && value2 == null)
                  result = 0;
              else if (typeof value1 === 'string' && typeof value2 === 'string')
                  result = value1.localeCompare(value2);
              else
                  result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

              return (event.order * result);
          });
      }

      Back(){
        this.router.navigateByUrl(" ");
      }
  }







