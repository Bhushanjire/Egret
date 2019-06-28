import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-right-side',
  templateUrl: './inbox-right-side.component.html',
  styleUrls: ['./inbox-right-side.component.scss']
})
export class InboxRightSideComponent implements OnInit {

  checktoggle = false;
  panelOpenState = false; 
 
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
  
  emailList=[
    {
    "mail_id":1, "chkbx" : true,"start":true,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago", "body":"mail body content", "expanded": false
  },
  {
    "mail_id":2,"chkbx" : true,"start":true,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":3,"chkbx" : true,"start":true,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":4,"chkbx" : true,"start":true,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":5,"chkbx" : true,"start":true,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":2,"chkbx" : true,"start":true,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  }
];
seletAll(event){
  if(event.checked){
    this.checktoggle=true;
  }else{
    this.checktoggle=false;
  }

}

panel(mail:any, isExpanded: Boolean){
mail.expanded = isExpanded;

  

}


}
