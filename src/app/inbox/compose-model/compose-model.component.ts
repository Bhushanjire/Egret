import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-compose-model',
  templateUrl: './compose-model.component.html',
  styleUrls: ['./compose-model.component.scss']
})
export class ComposeModelComponent implements OnInit {
  composeForm: FormGroup;
  mailAttachment : any;

  constructor(public compDialogRef: MatDialogRef<ComposeModelComponent>,private toastr: ToastrService) {
    compDialogRef.disableClose = true;
   }

  ngOnInit() {
    this.composeForm = new FormGroup({
      'emailTo': new FormControl(null, [Validators.required,Validators.email]),
      'emailSubject': new FormControl(null, Validators.required),
      'emailBody': new FormControl(null, Validators.required),
      'attachment': new FormControl(null)
    });
  }

  openAttchment(event : any){
    event.preventDefault();
    let element:HTMLElement = document.getElementById('mailAttachment') as HTMLElement;
    element.click();
  }

  sendEmail(){
   this.compDialogRef.close();
   this.toastr.success('Email sent successfully');
  }
  onFileChange(event : any){
    let files = event.target.files;
    this.mailAttachment=files[0].name;

  }

}
