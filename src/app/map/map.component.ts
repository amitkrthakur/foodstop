import { Component, OnInit } from '@angular/core';
import { BrowseComponent } from '../browse/browse.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: Number = this.http.latitude
  lon: Number = this.http.longitude

  constructor(private http: HttpService) { }

  ngOnInit() {

  }


}
