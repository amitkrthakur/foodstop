import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  lat:Number;
  lon:Number;

  restaurants:any[];

  constructor(private http:HttpService) { }

  ngOnInit() {
  }
  getColl() {
    console.log("getting restaurants")
    this.http.getCollections(this.lat, this.lon).subscribe(
      (data: any) => {
        console.log(data.collections);
        this.restaurants = data.restaurants
      }
    );
  }
}
