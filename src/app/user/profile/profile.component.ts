import { Component, OnInit } from '@angular/core';
import {CommanService} from '../comman.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user_id : string;
  first_name :string;
  last_name : string;
  email_id : string;
  mobile_no:string;
  constructor(private commanServie : CommanService) { }

  ngOnInit() {
    this.user_id = this.commanServie.user_id;
    this.first_name=this.commanServie.firstName;
    this.last_name = this.commanServie.lastName
    this.email_id=this.commanServie.emailId;
    this.mobile_no=this.mobile_no;
  }

}
