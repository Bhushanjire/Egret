import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CommanService} from '../comman.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  postData :any;
  constructor(private commanServie : CommanService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
      // the rest of inputs with the same approach
    });
  }
  signIn(data){
    this.postData={
      "username" : data.value.username,
      "password" : data.value.password
    }
    this.commanServie.signinSer(this.postData).subscribe(responce => {
      if(responce.success==true){
        localStorage.setItem('user_id', responce.data.user_id);
        localStorage.setItem('username', responce.data.username);
        localStorage.setItem('first_name', responce.data.first_name);
        localStorage.setItem('last_name', responce.data.last_name);
        localStorage.setItem('email_id', responce.data.email_id);
        this.toastr.success(responce.message);
        this.router.navigate(['/', 'user']).then(nav => {
          
        }, err => {
          
        });


      }else{
        this.toastr.error(responce.message);
      }
    });

  }


}
