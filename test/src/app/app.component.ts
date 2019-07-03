import { Component } from '@angular/core';

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
}
