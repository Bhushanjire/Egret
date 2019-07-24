import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventCalendarService} from '../event-calendar.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

 
  eventForm : FormGroup;
  constructor(public eventDialogRef: MatDialogRef<AddeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private eventService : EventCalendarService) { 
      eventDialogRef.disableClose = true;
    }

  ngOnInit() {
    this.eventForm = new FormGroup({
      "title" : new FormControl(null,Validators.required),
      "primary_color" : new FormControl(null,Validators.required),
      "secondary_color" : new FormControl(null,Validators.required),
      "start_date" : new FormControl(null,Validators.required),
      "end_date" : new FormControl(null,Validators.required),
      "location" : new FormControl(null,Validators.required),
      "notes" : new FormControl(null,Validators.required),
    });
  }
  addEvent(data){
    console.log(data);
    this.eventService.addEventService(data).subscribe(responce=>{
      if(responce.success==true){

      }else{
        
      }

    });
  }
  closeModel(){
    this.eventDialogRef.close();
    }
    public hasError = (controlName: string, errorName: string) =>{
      if(this.eventForm.controls[controlName].dirty && this.eventForm.controls[controlName].touched){
        return this.eventForm.controls[controlName].hasError(errorName);
      }
      
    }

}
