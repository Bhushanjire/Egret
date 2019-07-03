import { Component, OnInit } from '@angular/core';
import {CommanService} from '../comman.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private commanServie : CommanService) { }
  postData : any;
  dataSource : any;
  checkCart=true;
  cartEmpty : boolean=false;
  subtotal : any =0;
  total : any=0;
  loader : boolean =true;
  message : string;

  ngOnInit() {
    this.getCartData();
  }
  displayedColumns: string[] = ['remove', 'thumbnail', 'product', 'price','quantity','total'];

  getCartData(){
    this.postData={
      "user_id" : this.commanServie.user_id,
    }
    this.commanServie.getCartData(this.postData).subscribe(responce => {
      if(responce.success==false){
        this.checkCart=false;
        this.cartEmpty=true;
        this.message = responce.message;
      }else{
        this.loader=false;
        this.subtotal=0;
        this.total=0;
        this.dataSource = responce.data;
        this.cartEmpty = false;
        for(let i=0;i<responce.data.length;i++){
          this.subtotal+= responce.data[i].price1*responce.data[i].quantity;
        }
        this.total=this.subtotal+this.subtotal*15/100;
      }
    });
  }

  deleteData(cart_id : Number){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    this.postData={
      "cart_id" : cart_id,
    }
    this.commanServie.deleteCart(this.postData).subscribe(responce => {
      if(responce.success==true){
        this.getCartData();
        this.message = responce.message;
      }
    });
  }

  updateCart(cart_id:Number,quantity :Number){
    this.postData={
      "cart_id" : cart_id,
      "quantity" : quantity
    }
    this.commanServie.updateCart(this.postData).subscribe(responce => {
      if(responce.success==true){
        this.getCartData();
        this.message = responce.message;
      }
    });
  }

}





