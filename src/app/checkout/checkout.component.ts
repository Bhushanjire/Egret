import { Component, OnInit } from '@angular/core';
import {CommanService} from '../comman.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  shippingAdress =false;
  dataSource : any;
  subtotal =0;
  total=0;
  constructor(private commanServie : CommanService) { }

  ngOnInit() {
    this.getCartData();
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
    "user_id" : 1,
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

}
