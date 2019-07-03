import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  message: string = "Message from header component";
  @Output() drowerEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  hideshow(){
    this.drowerEvent.emit(this.message);
  }

}
