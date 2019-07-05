import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { InboxRightSideComponent } from './inbox-right-side/inbox-right-side.component';
import { StarredComponent } from './starred/starred.component';
import { SendComponent } from './send/send.component';
import { DraftComponent } from './draft/draft.component';
import { SpamComponent } from './spam/spam.component';


const routes: Routes = [
  {path : '',
  component:InboxComponent,
  children:[
    {path : 'inboxMail',component:InboxRightSideComponent},
    {path : 'starred',component:StarredComponent},
    {path : 'send',component:SendComponent},
    {path : 'draft',component:DraftComponent},
    {path : 'spam',component:SpamComponent}

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
