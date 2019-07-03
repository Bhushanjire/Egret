import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule} from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
