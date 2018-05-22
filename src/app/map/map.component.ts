import { Component, OnInit } from '@angular/core';
import { BrowseComponent } from '../browse/browse.component'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number = this.loc.latitude
  lon: number = this.loc.longitude

  constructor(private loc:BrowseComponent) { }

  ngOnInit() {

  }


}
