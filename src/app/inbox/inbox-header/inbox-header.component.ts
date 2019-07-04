import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-header',
  templateUrl: './inbox-header.component.html',
  styleUrls: ['./inbox-header.component.scss']
})
export class InboxHeaderComponent implements OnInit {

 mailLength = 0 ;
 headerBtnHideShow = false;
 checkAllBtn = false;
  constructor() { }

  ngOnInit() {
  }
  getMailLength($event){
  $event>0? this.headerBtnHideShow=true : this.headerBtnHideShow=false;
  // console.log('Length at parent',$event);
  }
  selectAllVal($event){
    $event=='yes'?this.headerBtnHideShow=true : this.headerBtnHideShow=false;
  }
  uncheckAllBtn($event){
    $event=='yes'?this.checkAllBtn=false: '';
    $event=='no'?this.checkAllBtn=true: '';
  }
  

}
