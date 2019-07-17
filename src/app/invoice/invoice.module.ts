import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ListComponent, AddComponent, AddItemComponent, ViewComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule
  ]
})
export class InvoiceModule { }
