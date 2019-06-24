import { Component, OnInit } from '@angular/core';
import {CommanService} from '../comman.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  shippingAdress =false;
  dataSource : any;
  subtotal =0;
  total=0;
  constructor(private commanServie : CommanService) { }

  ngOnInit() {
    this.getCartData();
    this.checkoutForm = new FormGroup({
      'bcountry': new FormControl(null, Validators.required),
      'blast_name': new FormControl(null, Validators.required),
      'baddrline1': new FormControl(null, Validators.required),
      'bcity': new FormControl(null, Validators.required),
      'bphone': new FormControl(null, Validators.required),
      'bfirst_name': new FormControl(null, Validators.required),
      'bcomp_name': new FormControl(null, Validators.required),
      'baddrline2': new FormControl(null, Validators.required),
      'bzip': new FormControl(null, Validators.required),
      'bemail': new FormControl(null, Validators.required),
      'scountry': new FormControl(null),
      'slast_name': new FormControl(null),
      'saddrline1': new FormControl(null),
      'scity': new FormControl(null),
      'sphone': new FormControl(null),
      'sfirst_name': new FormControl(null),
      'scomp_name': new FormControl(null),
      'saddrline2': new FormControl(null),
      'szip': new FormControl(null),
      'semail': new FormControl(null)
    });
  }
Country = ['India','England','America'];

postData : any;
shippingAddress(event) {
  if ( event.checked ) {
      this.shippingAdress = true;
 }else{
  this.shippingAdress = false;
 }
}

getCartData(){
  this.postData={
    "user_id" : this.commanServie.user_id,
  }
  this.commanServie.getCartData(this.postData).subscribe(responce => {
    if(responce.success==false){
    }else{
      this.dataSource = responce.data;
      for(let i=0;i<responce.data.length;i++){
        this.subtotal+= responce.data[i].price1*responce.data[i].quantity;
      }   
      this.total=this.subtotal+this.subtotal*15/100;
     
    }
  });
}

placeOrder(data){

}

}
