import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '_services/NavService.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public nav:NavServiceService) { }

  ngOnInit(): void {
  }

}
