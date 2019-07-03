import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//feature module 
import {UserModule} from './user/user.module';
import {AccountModule} from './account/account.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
//feature module 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    UserModule,
    AccountModule,
    AppRoutingModule
  
  ],
  
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
