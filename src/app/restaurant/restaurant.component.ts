import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  location: any;
  restaurants: any;
  topCuisines: [String];

  constructor(private http: HttpService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.http.nearbyRestaurants().subscribe(
      (data: any) => {
        console.log(data);
        this.location = data.location
        this.topCuisines = data.top_cuisines
        this.restaurants = data.nearby_restaurants
      }
    );
  }
  getRestraunts() {
    console.log(this.restaurants)
  }
  openMap(val) {
    this.bottomSheet.open(RestaurantMap, {
      data: val
    });
    console.log(val);
  }
}
@Component({
  templateUrl: './map.html',
  styleUrls: ['./map.scss'],
})
export class RestaurantMap {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<RestaurantMap>) { }

  name: any = this.data.name;
  location: any = this.data.location.locality_verbose;

  lat: Number = parseFloat(this.data.location.latitude)
  lon: Number = parseFloat(this.data.location.longitude)
  zoom: Number = 14

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  close() {
    console.log(this.lat, this.lon)
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
