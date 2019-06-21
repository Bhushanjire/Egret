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

const Userroutes: Routes = [
  {
    path : '',
    component:DashboardComponent,
    children:[
    
    {path : 'profile',component:ProfileComponent},
    {path : 'setting',component:SettingComponent},
    {path : 'calendar',component:CalendarComponent},
    {path : 'productlist',component:ProductlistComponent},
    {path : 'cart',component:CartComponent},
    {path : 'checkout',component:CheckoutComponent},
    {path : 'productdetail',component:ProductdetailComponent},
    {path : 'default',component:DefaultComponent},
    {path : 'analytics',component:AnalyticsComponent},
    {path : '',
    redirectTo:'productlist',
  pathMatch:'full'},
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(Userroutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
