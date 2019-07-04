import { Component, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-inbox-right-side',
  templateUrl: './inbox-right-side.component.html',
  styleUrls: ['./inbox-right-side.component.scss']
})
export class InboxRightSideComponent implements OnInit {

  checktoggle = false;
  panelOpenState = false;
  starColor = false;

  chkValue: any;
  tempArray: any;
  mailLength: any;
  @Output() lengthEvent = new EventEmitter<string>();
  @Output() selectAllEvent = new EventEmitter<string>();
  @Output() uncheckEvent = new EventEmitter<string>();
  selectAllVal: any;
  uncheckVal: any;
  constructor() { }

  ngOnInit() {

  }

  step = 1;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  emailList = [
    {
      "mail_id": 1, "chkbx": false, "markAsImp": false, "title": "Henrik Gevorg", "description": "Welcome to Angular Egret", "time": "2 years ago", "body": "mail body content", "expanded": false
    },
    {
      "mail_id": 2, "chkbx": false, "markAsImp": false, "title": "Henrik Gevorg", "description": "Welcome to Angular Egret", "time": "2 years ago", "body": "mail body content", "expanded": false
    },
    {
      "mail_id": 3, "chkbx": false, "markAsImp": false, "title": "Henrik Gevorg", "description": "Welcome to Angular Egret", "time": "2 years ago", "body": "mail body content", "expanded": false
    },
    {
      "mail_id": 4, "chkbx": false, "markAsImp": false, "title": "Henrik Gevorg", "description": "Welcome to Angular Egret", "time": "2 years ago", "body": "mail body content", "expanded": false
    },
    {
      "mail_id": 5, "chkbx": false, "markAsImp": false, "title": "Henrik Gevorg", "description": "Welcome to Angular Egret", "time": "2 years ago", "body": "mail body content", "expanded": false
    },
    {
      "mail_id": 6, "chkbx": false, "markAsImp": false, "title": "Henrik Gevorg", "description": "Welcome to Angular Egret", "time": "2 years ago", "body": "mail body content", "expanded": false
    }
  ];
  seletAll(event) {
    if (event.checked) {
      this.emailList.forEach(element => {
        element.chkbx = true;
        // console.log("data",element);

      });
      this.checktoggle = true;
      this.selectAllVal = 'yes';

      // this.checktoggle=true;
    } else {
      this.emailList.forEach(element => {
        element.chkbx = false;
        //console.log("data",element);

      });
      this.checktoggle = false;
      this.selectAllVal = 'no';
    }
    console.log(this.emailList);

    this.selectAllEvent.emit(this.selectAllVal);
  }

  panel(mail: any, isExpanded: Boolean) {
    mail.expanded = isExpanded;

  }
  markAsImp(event: any, mailData: any) {
    event.stopPropagation();
    if (mailData.markAsImp) {
      mailData.markAsImp = false;
    } else {
      mailData.markAsImp = true;
    }
  }

  markAll() {
    this.emailList.forEach(element => {
      if (element.markAsImp == true) {
        element.markAsImp = false;
      } else {
        element.markAsImp = true;
      }
      // console.log("data",element);

    });
  }

  deleteSelected() {
    let newArray = this.emailList.filter(function (val: any) {
      return val.chkbx == false;
    }, false);
    this.emailList = newArray;
    console.log(newArray);
    this.getEmailCount();
  }

  checkUncheck(event, mailData) {
    event.stopPropagation();
    if (mailData.chkbx) {
      mailData.chkbx = false;
      this.uncheckVal = 'yes';
      this.uncheckEvent.emit(this.uncheckVal);
    } else {
      mailData.chkbx = true;

    }
    this.getEmailCount();
    if (this.mailLength == this.emailList.length) {
      this.uncheckVal = 'no';
      this.uncheckEvent.emit(this.uncheckVal);
    }

  }

  getEmailCount() {
    this.tempArray = this.emailList.filter(
      email => email.chkbx == true);
    this.mailLength = this.tempArray.length;
    this.lengthEvent.emit(this.mailLength);

    //console.log(this.tempArray.length);
    console.log(this.tempArray);
    console.log(this.emailList);
  }



}
