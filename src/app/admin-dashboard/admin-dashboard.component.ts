import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../transitions';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  animations: [routerTransition]
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
  }

}
