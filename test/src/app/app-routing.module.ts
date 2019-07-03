import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {path : '',component:ProductlistComponent},
  {path : 'profile',component:ProfileComponent},
  {path : 'setting',component:SettingComponent},
  {path : 'calendar',component:CalendarComponent},
  {path : 'productlist',component:ProductlistComponent},
  {path : 'cart',component:CartComponent},
  {path : 'checkout',component:CheckoutComponent},
  {path : 'productdetail',component:ProductdetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
