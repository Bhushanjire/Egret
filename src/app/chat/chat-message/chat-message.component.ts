import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() chatDataChild: any;
  constructor() { }

  ngOnInit() {
    console.log("chatData",this.chatDataChild);
    
  }

}
