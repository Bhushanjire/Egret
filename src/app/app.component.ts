import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'bhdemo';
  panelOpenState = false;
  message:string;
  receiveMessage($event) {
    this.message = $event
  }
  constructor(private router :Router){}

  ngOnInit() {
    // if(localStorage.getItem('user_id')!='' && localStorage.getItem('user_id')!='0'){
    //   this.router.navigate(['/', 'user']);
    // }else{
    //   this.router.navigate(['/', 'account']);
    // }
  }

}
