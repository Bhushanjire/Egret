import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule} from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SearchPipe } from '../pipes/search.pipe';
import {SharedModule} from '../shared/shared.module';
import { DefaultComponent } from './default/default.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';
import * as highcharts from 'highcharts';
import { ChartModule } from 'angular-highcharts';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 






@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    LeftsidebarComponent,
    ProductlistComponent,
    ProfileComponent,
    SettingComponent,
    CalendarComponent,
    CartComponent,
    CheckoutComponent,
    ProductdetailComponent,
    SearchPipe,
    DefaultComponent,
    AnalyticsComponent
  ],
  imports: [
    SharedModule,
    NgChartjsModule,
    ChartModule,
    UserRoutingModule
    
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    LeftsidebarComponent,
    ProductlistComponent,
    ProfileComponent,
    SettingComponent,
    CalendarComponent,
    CartComponent,
    CheckoutComponent,
    ProductdetailComponent,
    SearchPipe,
    DefaultComponent,
    AnalyticsComponent
  ]
})
export class UserModule { }
