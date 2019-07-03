import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CommanService} from '../comman.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm: FormGroup;
  postData :any;
  constructor(private commanServie : CommanService,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.forgotpasswordForm = new FormGroup({
      'email': new FormControl(null, Validators.required)
    });
  }
  forgotPassword(data){
    
  }

}
