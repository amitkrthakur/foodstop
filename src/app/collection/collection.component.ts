import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collections: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.getCities().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   }
    //   );
    this.getColl();
  }

  getColl() {
    console.log("getting collections")
    this.http.getCollections().subscribe(
      (data: any) => {
        console.log(data.collections);
        this.collections = data.collections
      }
    );
  }
}
