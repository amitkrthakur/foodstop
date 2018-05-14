import { NgModule } from '@angular/core' ;
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule,MatSnackBarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
    imports: [MatProgressBarModule,MatGridListModule, MatAutocompleteModule, MatRadioModule, MatSnackBarModule, MatMenuModule, MatPaginatorModule, MatDialogModule, MatChipsModule, MatTooltipModule, MatNativeDateModule, MatTabsModule,MatTableModule, MatExpansionModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatListModule, MatSidenavModule, MatCheckboxModule, MatSortModule ],
    exports: [MatProgressBarModule,MatGridListModule, MatAutocompleteModule, MatRadioModule, MatSnackBarModule, MatMenuModule, MatPaginatorModule, MatDialogModule, MatChipsModule, MatTooltipModule, MatNativeDateModule, MatTabsModule,MatTableModule, MatExpansionModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatListModule, MatSidenavModule, MatCheckboxModule, MatSortModule ],
})

export class MaterialModule { }


