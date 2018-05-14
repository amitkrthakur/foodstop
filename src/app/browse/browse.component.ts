import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../transitions';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
  animations: [ routerTransition ]

})
export class BrowseComponent implements OnInit {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  constructor() { }

  ngOnInit() {
  }

}
