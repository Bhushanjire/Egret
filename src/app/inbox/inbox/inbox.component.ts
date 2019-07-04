import { Component, OnInit } from '@angular/core';
import { MailboxService } from "../mailbox.service";


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  composeData : any;
  constructor(private data: MailboxService) { }

  ngOnInit() {
    
  }
  receiveCompose($event){
    this.composeData=$event;
    this.data.currentMessage.subscribe(message => this.composeData = message)
    this.data.changeMessage($event)
    console.log("Inbox",$event);
  }

}
