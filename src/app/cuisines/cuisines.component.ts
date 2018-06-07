import { Component, OnInit, Inject } from '@angular/core';
import { routerTransition, groupsTransition } from '../transitions';
import { DataService } from '../data.service';
import { MatPaginator, MatSort, MatExpansionPanel, MatSnackBar } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { HttpService } from '../http.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';


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

  cuisines: any = this.data.cuisines;

  cuslist: any;

  constructor(private data: DataService, private http: HttpService, public snackBar: MatSnackBar, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.http.getCuisines().subscribe(
      (data: any) => {
        this.cuslist = data.cuisines
      }
    );
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
  browse() {
    this.bottomSheet.open(BrowseMoreCuisines, {
      data: this.cuslist
    });
  }


}
@Component({
  templateUrl: './more.cuisines.html',
  styleUrls: ['./more.cuisines.scss'],
})
export class BrowseMoreCuisines {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<BrowseMoreCuisines>) { }

  cusinesList: any = this.data;

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  getCuisine(val) {
    console.log(val)
  }
}