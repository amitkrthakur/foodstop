import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number = 28.5275198;
  lon: number = 77.0688997;
  constructor() { }

  ngOnInit() {
  }

}
