import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() emailList: any;

  step = 0;
  checktoggle = false;
  panelOpenState = false; 
  starColor =false;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
    console.log(this.emailList);  
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
    
      
      this.starColor = !this.starColor;
      console.log(this.starColor);
      
      this.starColor =mailData.id;
    }

    seletAll(event){
      if(event.checked){
        this.checktoggle=true;
      }else{
        this.checktoggle=false;
      }
    }

    deleteSelected(){
      this.emailList.splice(1, 1);
    }

}
