import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  animal: string;
  name: string;
  memberForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.memberForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null),
      'phone': new FormControl(null),
      'balance': new FormControl(null),
      'bphone': new FormControl(null),
      'age': new FormControl(null),
      'company': new FormControl(null),
      'address': new FormControl(null),
      'status': new FormControl(null),
    });
  }

  memberAddUpdate(data){
    
  }

}
