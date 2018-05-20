import { Component, OnInit } from '@angular/core';
import { routerTransition, groupsTransition } from '../transitions';
import { DataService } from '../data.service';
import { MatPaginator, MatSort, MatExpansionPanel, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss'],
  animations: [routerTransition, groupsTransition]
})
export class CuisinesComponent implements OnInit {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  selected: any;

  order: String[];

  cuisines: any = this.data.cuisines

  constructor(private data: DataService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addtoCart(val) {
    this.order.push(val);
    console.log(val)
    this.snackBar.open('Login', 'Successfull', {
      duration: 2000,
    });
  }
  onSelect(cuisine) {
    this.selected = cuisine;
  }

}
