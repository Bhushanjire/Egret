import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignRoutingModule } from './material-design-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialDesignRoutingModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    positionClass: 'toast-bottom-center',
    preventDuplicates: true,
    }),
    MatCheckboxModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule 

  ],
  exports:[
    CommonModule,
    MaterialDesignRoutingModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ToastrModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [  
    MatDatepickerModule,  
  ]
})
export class MaterialDesignModule { }
