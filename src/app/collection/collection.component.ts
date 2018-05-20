import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collections:any;
  lat: number = 28.5275198;
  lon: number = 77.0688997;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getColl();
  }

  getColl() {
    console.log("getting collections")
    this.http.getCollections(this.lat, this.lon).subscribe(
      (data: any) => {
        console.log(data.collections);
        this.collections = data.collections
      }
    );
  }
}
