import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventCalendarService} from '../event-calendar.service';
import { ToastrService } from 'ngx-toastr';

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

 minStartDate =new Date();
 minEndDate=new Date();
 color1 ="#358838";
 color2="#881a7f";
  eventForm : FormGroup;
  constructor(public eventDialogRef: MatDialogRef<AddeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private eventService : EventCalendarService,private toastr: ToastrService) { 
      eventDialogRef.disableClose = true;
    }

  ngOnInit() {
    this.eventForm = new FormGroup({
      "title" : new FormControl(null,Validators.required),
      "primary_color" : new FormControl(this.color1,Validators.required),
      "secondary_color" : new FormControl(this.color2,Validators.required),
      "start_date" : new FormControl(null,Validators.required),
      "end_date" : new FormControl(null,Validators.required),
      "location" : new FormControl(null,Validators.required),
      "notes" : new FormControl(null,Validators.required),
    });
  }
  addEvent(data){
    console.log(data);
    this.eventService.addEventService(data.value).subscribe(responce=>{
      if(responce.success==true){
        this.toastr.success(responce.message);
        this.closeModel();
      }else{
        this.toastr.error(responce.message);
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
    setMinDate(event){
      this.minEndDate=event.value;
      //console.log("event",event);
    }

}
