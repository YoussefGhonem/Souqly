import { Component, OnInit } from '@angular/core';
import { Count } from '_models/Count';
import { User } from '_models/user';

import { AuthServicesService } from '_services/AuthServices.service';
import { DashboardServiceService } from '_services/dashboard-service.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  nstd:User[]=[]

  count:Count;
  data: any;
  




  constructor(private serve:AuthServicesService , private autserve:UserCrudService ,private Dashserv:DashboardServiceService) {

    this.data = {
      datasets: [{
          data: [
            // this.count.numOfProduct,
            // this.count.numOfMarkiting,
            // this.count.numOfSupplier,
            // this.count.numOfShipping,
            // this.count.numOfCategory
            1,2,3,4,5
          ],
          backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
          ],
          label: 'My dataset'
      }],
      labels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Blue"
      ]
  }




   }

  ngOnInit(): void {

    this.autserve.getAll().subscribe(a=>{this.nstd=a});

    this.Dashserv.getCount().subscribe(c=>{this.count=c});

  }











}



