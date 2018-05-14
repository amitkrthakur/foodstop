import { Component, OnInit } from '@angular/core';
import { routerloginTransition } from '../transitions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [ routerloginTransition ]

})
export class AuthComponent implements OnInit {


  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  constructor() { }

  ngOnInit() {
  }

}
