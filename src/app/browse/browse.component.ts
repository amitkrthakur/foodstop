import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../transitions';
//import { CuisinesComponent } from '../cuisines/cuisines.component'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
  animations: [routerTransition]
})
export class BrowseComponent implements OnInit {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  //count: any = this.orders.order;

  //constructor(private orders:CuisinesComponent) { }

  ngOnInit() {
  }

}
