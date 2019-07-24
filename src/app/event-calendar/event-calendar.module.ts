import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCalendarRoutingModule } from './event-calendar-routing.module';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import {SharedModule} from '../shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddeventComponent } from './addevent/addevent.component';



@NgModule({
  declarations: [EventCalendarComponent, AddeventComponent],
  imports: [
    CommonModule,
    EventCalendarRoutingModule,
    SharedModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  exports:[EventCalendarComponent],
  entryComponents: [
    AddeventComponent,
  ]
})
export class EventCalendarModule { }
