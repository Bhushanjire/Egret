import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventCalendarService {

  constructor(private httpClient:HttpClient) { }

  addEventService(data){
    return this.httpClient.post("http://localhost/egret_api/api/event_calendar/createEvent",data).pipe(map((res:any)=>res));
  }
  getEventListService(){
    return this.httpClient.get("http://localhost/egret_api/api/event_calendar/eventList").pipe(map((res:any)=>res));
  }
}