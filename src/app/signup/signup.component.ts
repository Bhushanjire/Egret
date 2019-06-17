import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CommanService} from '../comman.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  postData :any;
  message ='';
  constructor(private commanServie : CommanService,private toastr: ToastrService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirm_password': new FormControl(null, Validators.required)
    });
  }

  signUp(data){
    this.postData={
      "username" : data.value.username,
      "password" : data.value.password
    }
    this.commanServie.signupSer(this.postData).subscribe(responce => {
      if(responce.success==true){
        localStorage.setItem('user_id', responce.data.user_id);
        localStorage.setItem('username', responce.data.username);
        localStorage.setItem('first_name', responce.data.first_name);
        localStorage.setItem('last_name', responce.data.last_name);
        localStorage.setItem('email_id', responce.data.email_id);
        this.toastr.success(responce.message);
      }else{
        this.toastr.error(responce.message);
      }
    });
  }

}
