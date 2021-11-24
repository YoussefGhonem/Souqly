import { AuthServicesService } from './../../../_services/AuthServices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthServicesService) { }

  ngOnInit(): void {
  }
  loggedIn() {
  return  this.auth.loggedIn()
  }
}
