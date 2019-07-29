import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AddeventComponent } from '../addevent/addevent.component';
import { EventCalendarService } from '../event-calendar.service';
import { ToastrService } from 'ngx-toastr';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCalendarComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  postData: any;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="text-whight material-icons icon-sm">edit</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="text-whight material-icons icon-sm">close</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  refresh: Subject<any> = new Subject();

  eventArray = [{
    start: startOfDay(new Date('Wed July 24 2019 02:07:09')),
    title: 'An event with no end date',
    // color: colors.yellow,
    // actions: this.actions
  },
  {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    // color: colors.blue,
    // allDay: true
  }];

  events: CalendarEvent[];
  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue,
  //     allDay: true
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];


  activeDayIsOpen: boolean = true;
  constructor(public dialog: MatDialog, private eventService: EventCalendarService, private toastr: ToastrService) { }
  ngOnInit() {
    this.activeDayIsOpen = true;
    this.showEvent();
    
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
       
        
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
        )
       
       {
     
        this.activeDayIsOpen = false;
      } else {
      
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: any): any {
    //this.modalData = { event, action };
    this.postData = {
      "event_id": event.event_id,
    }
    if (action == "Edited") {
      this.eventService.editEventService(this.postData).subscribe(responce => {
        if (responce.success == true) {
          const dialogRefEdit = this.dialog.open(AddeventComponent, {
            width: '500px',
            data: responce.data
          });
          dialogRefEdit.afterClosed().subscribe(result => {
            this.showEvent();
          });
        }
      });
    } else if (action == "Deleted") {
      this.eventService.deleteEventService(this.postData).subscribe(responce => {
        if (responce.success == true) {
          this.toastr.success(responce.message);
          this.showEvent();
        } else {
          this.toastr.error(responce.message);
        }
      });
    }
    console.log(event);
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    console.log("events", this.events);
    const dialogRef = this.dialog.open(AddeventComponent, {
      width: '500px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showEvent();
    });


    // this.events = [
    //   ...this.events,
    //   {
    //     title: 'New event',
    //     start: startOfDay(new Date()),
    //     end: endOfDay(new Date()),
    //     color: colors.red,
    //     draggable: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     }
    //   }
    // ];
  }
  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }


  showEvent() {
    this.eventService.getEventListService().subscribe(responce => {
      if (responce.success == true) {
        //  for(let i=0;i<responce.data.length;i++){
        //   // this.events[i]['start'] =new Date(responce.data[i].start);
        //   // this.events[i]['end'] =new Date(responce.data[i].end);
        //   // this.events[i]['title'] =responce.data[i].title;
        //   this.events.push({
        //     "start" : new Date(responce.data[i].start),
        //     "end" : new Date(responce.data[i].end),
        //     "title" : responce.data[i].title
        //   });
        //  }
        for (var i in responce.data) {
          responce.data[i].start = new Date(responce.data[i].start);
          responce.data[i].end = new Date(responce.data[i].end);
          responce.data[i].title = responce.data[i].title;
          responce.data[i]['color'] = {
            "primary": responce.data[i].primary_color,
            "secondary": responce.data[i].secondary_color
          }
          responce.data[i]['resizable'] = {
            "beforeStart": responce.data[i].beforeStart,
            "afterEnd": responce.data[i].afterEnd
          }
          responce.data[i]['actions'] = this.actions;
        }
        console.log("responce", responce.data);
        this.events = responce.data;
      } else {
      }
    });
  }

}
