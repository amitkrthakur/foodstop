import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  selectedCuisine:any;

  //@Input() cuisine:any;
  message:string;


  receiveMessage($event) {
    this.message = $event
  }


  ngOnInit() {
    //console.log(this.cuisine)
  }

}
