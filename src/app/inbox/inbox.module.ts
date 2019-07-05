import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox/inbox.component';

import { SharedModule } from '../shared/shared.module';
import { InboxLeftSideComponent } from './inbox-left-side/inbox-left-side.component';
import { InboxRightSideComponent } from './inbox-right-side/inbox-right-side.component';
import { InboxHeaderComponent } from './inbox-header/inbox-header.component';
import { ComposeModelComponent } from './compose-model/compose-model.component';
import { QuillModule } from 'ngx-quill';
import { MailComponent } from './mail/mail.component';
import { StarredComponent } from './starred/starred.component';
import { SendComponent } from './send/send.component';
import { DraftComponent } from './draft/draft.component';
import { SpamComponent } from './spam/spam.component';






@NgModule({
  declarations: [
    InboxComponent,
    InboxLeftSideComponent,
    InboxRightSideComponent,
    InboxHeaderComponent,
    ComposeModelComponent,
    MailComponent,
    StarredComponent,
    SendComponent,
    DraftComponent,
    SpamComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    QuillModule,
  ],
  exports: [
    InboxComponent
  ],
  entryComponents:[
    ComposeModelComponent
  ],
  
})
export class InboxModule { }
