import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [ChatComponent, ChatMessageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
