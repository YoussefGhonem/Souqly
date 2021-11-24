import { NavServiceService } from './../../../_services/NavService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NotFound',
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(public nav:NavServiceService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
