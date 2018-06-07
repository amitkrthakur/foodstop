import { Component, OnInit, Output } from '@angular/core';
import { routerTransition } from '../transitions';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
  animations: [routerTransition]
})
export class BrowseComponent implements OnInit {

  selectedCity: String = 'New Delhi, India'

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  //cartCount: any = this.orders.order.length;

  constructor(private http: HttpService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.http.latitude = position.coords.latitude;
        this.http.longitude = position.coords.longitude;
        console.log(position.coords);
      });
    }
  }

}
