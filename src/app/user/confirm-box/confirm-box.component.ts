import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface custData {
  cust_id: number;
  cust_name : string;
}

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {
  name : string;
  constructor(public dialogRef: MatDialogRef<ConfirmBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: custData) {
      dialogRef.disableClose = true;
    }

  ngOnInit() {
    this.name=this.data.cust_name;
  };
  onNoClick(btnval): void {
    this.dialogRef.close(btnval);
    console.log('cust_id',this.data.cust_id);
  
  }
}
