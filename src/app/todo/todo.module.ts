import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ],
  exports : [
    ListComponent
  ]
})
export class TodoModule { }
