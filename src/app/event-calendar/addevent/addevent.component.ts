import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventCalendarService } from '../event-calendar.service';
import { ToastrService } from 'ngx-toastr';

export interface DialogData {
  title: any;
  primary_color: any;
  secondary_color: any;
  start_date: any;
  end_date: any;
  location: any;
  notes: any;
  event_id: any;
}
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  minStartDate = new Date();
  minEndDate = new Date();
  primary_color = "#358838";
  secondary_color = "#881a7f";
  btnLabel = "Add";

  eventForm: FormGroup;
  constructor(public eventDialogRef: MatDialogRef<AddeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private eventService: EventCalendarService, private toastr: ToastrService) {
    eventDialogRef.disableClose = true;
  }

  ngOnInit() {
    this.eventForm = new FormGroup({
      "title": new FormControl(null, Validators.required),
      "primary_color": new FormControl(this.primary_color, Validators.required),
      "secondary_color": new FormControl(this.secondary_color, Validators.required),
      "start_date": new FormControl(null, Validators.required),
      "end_date": new FormControl(null, Validators.required),
      "location": new FormControl(null, Validators.required),
      "notes": new FormControl(null, Validators.required),
      "event_id": new FormControl(0, Validators.required),
    });

    if (this.data) {
      console.log("model Data",this.data.title);
      this.btnLabel = "Update";
      this.primary_color = this.data.primary_color;
      this.secondary_color =this.data.secondary_color;
      this.eventForm.patchValue({
        "title": this.data.title,
        "primary_color": this.data.primary_color,
        "secondary_color": this.data.secondary_color,
        "start_date": new Date(this.data.start_date),
        "end_date": new Date(this.data.end_date),
        "location": this.data.location,
        "notes": this.data.notes,
        "event_id": this.data.event_id,
      });
    }
  }
  addEvent(formData) {
    console.log("EventFormData",formData);
    if(formData.value.event_id >0){
      this.eventService.updateEventService(formData.value).subscribe(responce => {
        if (responce.success == true) {
          this.toastr.success(responce.message);
          this.closeModel();
        } else {
          this.toastr.error(responce.message);
        }
  
      });
    }else{
      this.eventService.addEventService(formData.value).subscribe(responce => {
        if (responce.success == true) {
          this.toastr.success(responce.message);
          this.closeModel();
        } else {
          this.toastr.error(responce.message);
        }
  
      });
    }

    
  }
  closeModel() {
    this.eventDialogRef.close();
  }
  public hasError = (controlName: string, errorName: string) => {
    if (this.eventForm.controls[controlName].dirty && this.eventForm.controls[controlName].touched) {
      return this.eventForm.controls[controlName].hasError(errorName);
    }

  }
  setMinDate(event) {
    this.minEndDate = event.value;
    //console.log("event",event);
  }
  colorPickerChange(event,picker_name){
    if(picker_name=="primary_color"){
      this.eventForm.patchValue({
        "primary_color": event,
      });
    }else{
      this.eventForm.patchValue({
       "secondary_color": event
      });
    }
  }
}
