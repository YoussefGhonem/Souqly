import { Component, OnInit } from '@angular/core';
import { UserProfit } from '_models/ola/UserProfit';
import { UserServiceService } from '_services/user-service.service';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.css']
})
export class ProfitsComponent implements OnInit {

  profitsData:UserProfit;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getProfits().subscribe(
      d => this.profitsData = d
    );
  }

}
