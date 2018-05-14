import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../transitions';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss'],
  animations: [ routerTransition ]

})
export class CuisinesComponent implements OnInit {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  
  cuisines:any=this.data.cuisines
  
  constructor(private data:DataService) { }

  ngOnInit() {
  }

}
