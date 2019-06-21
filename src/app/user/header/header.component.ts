import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  message: string = "Message from header component";
  @Output() drowerEvent = new EventEmitter<string>();
  constructor(private router: Router) { }
  ngOnInit() {
    if(localStorage.getItem('user_id')=='null' || localStorage.getItem('user_id')==null){
     // this.router.navigate(['/', 'account']);
    }
  }
  hideshow(){
    this.drowerEvent.emit(this.message);
  }

  signout(){
    localStorage.clear();
    this.router.navigate(['/', 'account']);
  }
}
