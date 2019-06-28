import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommanService } from '../comman.service';
import { RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface DialogData {
  cust_name: string;
  cust_email: string;
  cust_phone: string;
  cust_balance: string;
  cust_age: string;
  cust_company: string;
  cust_address: string;
  cust_status: string;
  cust_id :number;
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  memberForm: FormGroup;
  //postData : any;
  constructor(public custdialogRef: MatDialogRef<AddMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private commanServie: CommanService, private toastr: ToastrService) { 
      custdialogRef.disableClose = true;
    }

  ngOnInit() {
    this.memberForm = new FormGroup({
      'cust_name': new FormControl(null, Validators.required),
      'cust_email': new FormControl(null, Validators.email),
      'cust_phone': new FormControl(null, [Validators.minLength(12), Validators.maxLength(12)]),
      'cust_balance': new FormControl(null),
      'cust_age': new FormControl(null),
      'cust_company': new FormControl(null),
      'cust_address': new FormControl(null),
      'cust_status': new FormControl(null),
      'cust_id' : new FormControl(null)
    });
   
    console.log("member Data=",this.data);
    if(this.data){
    this.memberForm.patchValue({    
      "cust_name":this.data.cust_name,    
      "cust_email":this.data.cust_email,
      "cust_phone":this.data.cust_phone,  
      "cust_balance":this.data.cust_balance,  
      "cust_age":this.data.cust_age,  
      "cust_company":this.data.cust_company,  
      "cust_address":this.data.cust_address,  
      "cust_status":this.data.cust_status == 'Active' ? true : false, 
      "cust_id":this.data.cust_id,   
      }); 
    }

    console.log(this.memberForm);
    
  }

  memberAddUpdate(data) {
    console.log(JSON.stringify(data.value));
    if(data.value.cust_id > 0){
      this.commanServie.updateCustomer(JSON.stringify(data.value)).subscribe(responce => {
        if (responce.success == false) {
          this.toastr.error(responce.message);
        } else {
          //data.reset();
          this.custdialogRef.close();
          this.toastr.success(responce.message);
        }
      });
    }else{
      this.commanServie.addMember(JSON.stringify(data.value)).subscribe(responce => {
        if (responce.success == false) {
          this.toastr.error(responce.message);
        } else {
          data.reset();
          this.custdialogRef.close();
          this.toastr.success(responce.message);
        }
      });
    }
  }

  

}
