import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent
  ],
  imports: [
    AccountRoutingModule,
    SharedModule
  ],
  exports :[
    SigninComponent,
    SignupComponent
  ]
})
export class AccountModule { }
