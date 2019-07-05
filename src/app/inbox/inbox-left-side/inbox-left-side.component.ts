import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ComposeModelComponent } from '../compose-model/compose-model.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';



@Component({
  selector: 'app-inbox-left-side',
  templateUrl: './inbox-left-side.component.html',
  styleUrls: ['./inbox-left-side.component.scss']
})
export class InboxLeftSideComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Output() composeEvent = new EventEmitter<string>();
  ngOnInit() {
  }

  openComposeMail(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      left : '150px',

  };
    const composeDialogRef = this.dialog.open(ComposeModelComponent, {
      width: '100%',
      height: '500px',
     
    
      data: {}
    });

    composeDialogRef.afterClosed().subscribe(result => {
   // console.log("result",result);
    
      if(result){
        this.composeEvent.emit(result);
      }
     
    });
  }
  
  
}
