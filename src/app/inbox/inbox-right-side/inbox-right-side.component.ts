import { Component, OnInit } from '@angular/core';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-inbox-right-side',
  templateUrl: './inbox-right-side.component.html',
  styleUrls: ['./inbox-right-side.component.scss']
})
export class InboxRightSideComponent implements OnInit {

  checktoggle = false;
  panelOpenState = false; 
  starColor =false;
  chkValue : any;
  
 
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
    "mail_id":1, "chkbx" : false,"markAsImp":false,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago", "body":"mail body content", "expanded": false
  },
  {
    "mail_id":2,"chkbx" : false,"markAsImp":false,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":3,"chkbx" : false,"markAsImp":false,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":4,"chkbx" : false,"markAsImp":false,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":5,"chkbx" : false,"markAsImp":false,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  },
  {
    "mail_id":6,"chkbx" : false,"markAsImp":false,"title":"Henrik Gevorg","description":"Welcome to Angular Egret","time":"2 years ago","body":"mail body content", "expanded": false
  }
];
seletAll(event){
  if(event.checked){
    this.emailList.forEach(element => {
      element.chkbx=true;
     // console.log("data",element);
      
    });
   // this.checktoggle=true;
  }else{
    this.emailList.forEach(element => {
      element.chkbx=false;
      //console.log("data",element);
      
    });
    
  }

}

panel(mail:any, isExpanded: Boolean){
mail.expanded = isExpanded;

}
markAsImp(event : any,mailData : any){
  event.stopPropagation();
  if(mailData.markAsImp){
    mailData.markAsImp = false; 
  }else{
    mailData.markAsImp = true;
  }
}

deleteSelected(){
  this.emailList.forEach((element,index) => {
    if(element.chkbx==true){
      this.emailList.splice(index,1);
      console.log(index);
      
    }
    console.log("data",element);
    
  });
  
}

checkUncheck(event,mailData,checkUncheck){
  event.stopPropagation();
  if(checkUncheck.checked){
    mailData.chkbx=true;
  }else{
    mailData.chkbx=false;
  }
  console.log(checkUncheck.checked);
}



}
