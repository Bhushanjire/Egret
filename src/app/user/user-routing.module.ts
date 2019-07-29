import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CurdTableComponent } from './curd-table/curd-table.component';

const Userroutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

      { path: 'profile', component: ProfileComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'productlist', component: ProductlistComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'productdetail', component: ProductdetailComponent },
      { path: 'default', component: DefaultComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'curdtable', component: CurdTableComponent },
      {
        path: '',
        redirectTo: 'productlist',
        pathMatch: 'full'
      },
      {
        path: 'inbox',
        loadChildren: () => import('../inbox/inbox.module').then(mod => mod.InboxModule)
      },
      {
        path : 'invoice',
        loadChildren : () =>import('../invoice/invoice.module').then(mod=>mod.InvoiceModule)
      },
      {
        path : 'chat',
        loadChildren : () =>import('../chat/chat.module').then(mod=>mod.ChatModule)
      },
      {
        path : 'EventCalendar',
        loadChildren : () =>import('../event-calendar/event-calendar.module').then(mod=>mod.EventCalendarModule)
      },
      {
        path : 'todo',
        loadChildren : () =>import('../todo/todo.module').then(mod=>mod.TodoModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(Userroutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
