import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-compose-model',
  templateUrl: './compose-model.component.html',
  styleUrls: ['./compose-model.component.scss']
})
export class ComposeModelComponent implements OnInit {
  composrForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.composrForm = new FormGroup({
      'emailTo': new FormControl(null, Validators.required),
      'emailSubject': new FormControl(null, Validators.required),
      
    });
  }

}
