import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { CommanService } from '../comman.service';
import { RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  min: number;
  max: number;
  hideCategory: boolean = true;
  productlistdata: any;
  productlistdatasearch: any;
  colsm: number = 10;
  horizontalProduct: boolean = false;
  verticalProduct: boolean = true;
  postData: any;
  totalCartItem: number = 0;
  message: string;
  loader = true;
  tempData: any;
  MINVALUE = 10;
  MAXVALUE = 60;
  length = 0;
  pageSize = 6;
  pageIndex = 1;

  pageSizeOptions: number[] = [6, 30, 60, 90, 120];

  constructor(private commanServie: CommanService, private toastr: ToastrService) { }

  ngOnInit() {
    this.commanServie.getlist().subscribe(responce => {
      if (responce.success == true) {
        //this.productlistdata = responce.data;

        var page = 1,
          per_page = 6,
          offset = (page - 1) * per_page,

          paginatedItems = responce.data.slice(offset).slice(0, per_page),
          total_pages = Math.ceil(responce.data.length / per_page);
        this.productlistdata = paginatedItems

        this.productlistdatasearch = responce.data;
        this.loader = false;
        this.length = responce.data.length;
      } else {
        this.message = responce.message;
      }
    });

    this.getCartCount();


  }



  getCartCount() {
    this.postData = {
      "user_id": this.commanServie.user_id
    }
    this.commanServie.cartTotal(this.postData).subscribe(responce => {
      if (responce.success == 1) {
        this.totalCartItem = responce.totalItem;
      }
    });
  }



  //productList: Array<Object> = this.commanServie.productList();

  hideshowCat() {
    this.hideCategory = !this.hideCategory;
    if (this.hideCategory)
      this.colsm = 10;
    else
      this.colsm = 12;
  }
  viewVertical() {
    this.horizontalProduct = false;
    this.verticalProduct = true;
  }
  viewHorizontal() {
    this.horizontalProduct = true;
    this.verticalProduct = false;
  }
  addToCart(product_id: Number) {
    this.postData = {
      "product_id": product_id,
      "user_id": this.commanServie.user_id,
      "quantity": 1
    }

    this.commanServie.addData(this.postData).subscribe(responce => {
      if (responce.success == 1) {
        this.toastr.success('Product added to cart');
        this.getCartCount();
      } else {
        //alert('Product not added');
      }

    });
  }

  searchByCategory(searchtext) {
    if (searchtext == 'all') {
      this.productlistdata = this.productlistdatasearch;
    } else {
      this.tempData = this.productlistdatasearch;
      this.productlistdata = this.tempData.filter(
        product => product.category === searchtext);
    }
  }

  priceMinMax(minValue, maxValue, type, event) {

    if (type == 'min') {
      this.MAXVALUE = this.MAXVALUE - 1;
    } else {
      this.MINVALUE = this.MINVALUE - 1;
    }

    this.tempData = this.productlistdatasearch;
    this.productlistdata = this.tempData.filter(
      product => product.price1 >= minValue && product.price1 <= maxValue);
    console.log("min=" + minValue + " Max=" + maxValue + "Event=" + event.step);

  }

  sliderChange(event) {
    console.log(event);
  }

  pagination(event) {
    this.pageIndex = event.pageIndex + 1;
    var page = this.pageIndex,
      per_page = 6,
      offset = (page - 1) * per_page,
      paginatedItems = this.productlistdatasearch.slice(offset).slice(0, per_page),
      total_pages = Math.ceil(this.productlistdatasearch.length / per_page);
    this.productlistdata = paginatedItems
    console.log(event);
  }

}
