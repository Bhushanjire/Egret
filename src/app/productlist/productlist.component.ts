import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {CommanService} from '../comman.service';
import { RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  min : number;
  max : number;
  hideCategory : boolean=true;
  productlistdata : any;
  colsm : number=10;
  horizontalProduct : boolean=false;
  verticalProduct : boolean=true;
  postData : any;
  totalCartItem : number=0;
  message : string;
  loader =true;
  constructor(private commanServie : CommanService,private toastr: ToastrService) { }

  ngOnInit() {
    this.commanServie.getlist().subscribe(responce => {
      if(responce.success==true){
      this.productlistdata = responce.data; 
      this.loader=false;
      }else{
        this.message=responce.message;
      }
    });
    
    this.getCartCount();

  }

getCartCount(){
  this.postData={
    "user_id" : 1
  }
  this.commanServie.cartTotal(this.postData).subscribe(responce => {
     if(responce.success==1){
      this.totalCartItem=responce.totalItem;
     }
  });
}

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    
    return value;
  }

//productList: Array<Object> = this.commanServie.productList();

hideshowCat(){
  this.hideCategory = !this.hideCategory;
  if(this.hideCategory)  
      this.colsm = 10;
    else
      this.colsm = 12;
}
viewVertical(){
  this.horizontalProduct=false;
  this.verticalProduct =true;
}
viewHorizontal(){
  this.horizontalProduct=true;
  this.verticalProduct=false;
}
addToCart(product_id:Number){
  this.postData={
    "product_id":product_id,
    "user_id" : 1,
    "quantity" : 1
  }
 
  this.commanServie.addData(this.postData).subscribe(responce => {
   if(responce.success==1){
      this.toastr.success('Product added to cart');
      this.getCartCount();
   }else{
     //alert('Product not added');
   }

  });

}

}
