import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForWithdrawRequest } from '_models/ola/UserForWithdrawRequest';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  user:any;
  constructor(private router:Router) { 
    this.user = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    
  }

}
