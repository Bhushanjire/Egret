import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  totalCartItem : number=0;
  constructor(private httpClient : HttpClient) { }

  public productList(){
   return  [
      {id : 1,name: 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass', description: 'Marvelous Mondays!',cagegory:'Speaker',Tags:'sunt sunt culpa',price1:'32',price2:'54',main_image:'speaker-1.jpg'},
      {id : 2,name: 'Portable Speaker with HD Sound', description: 'Marvelous Mondays!',cagegory:'Speaker',Tags:'Loremnisiad',price1:'25',price2:'43',main_image:'speaker-2.jpg'},
      {id : 3,name: 'Lightweight On-Ear Headphones - Black', description: 'Marvelous Mondays!',cagegory:'headphone',Tags:'euirureproident',price1:'29',price2:'55',main_image:'headphone-2.jpg'},
      {id : 4,name: 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)', description: 'Marvelous Mondays!',cagegory:'watch',Tags:'laborum minim tempor',price1:'33',price2:'58',main_image:'watch-2.jpg'},
      {id : 5,name: 'Automatic-self-wind mens Watch 5102PR-001', description: 'Marvelous Mondays!',cagegory:'watch',Tags:'Lorem dolor duis',price1:'38',price2:'50',main_image:'watch-1.jpg'},
      {id : 6,name: 'On-Ear Headphones - Black', description: 'Marvelous Mondays!',cagegory:'headphone',Tags:'magna veniam sunt',price1:'38',price2:'54',main_image:'headphone-3.jpg'},
  ];
  }

  public getlist(){
    return this.httpClient.get('http://localhost/bhAPI/getProductList.php').pipe(map((res:any)=>res));
  }

  public addData(data){
    return this.httpClient.post('http://localhost/bhAPI/addToCart.php',data).pipe(map((res:any)=>res));
  }

  public getCartData(data){
    return this.httpClient.post('http://localhost/bhAPI/getCartData.php',data).pipe(map((res:any)=>res));
  }

  public deleteCart(data){
    return this.httpClient.post('http://localhost/bhAPI/deleteCartItem.php',data).pipe(map((res:any)=>res));
  }

  public cartTotal(data){
    return this.httpClient.post('http://localhost/bhAPI/getCartItemCount.php',data).pipe(map((res:any)=>res));
  }

  public updateCart(data){
    return this.httpClient.post('http://localhost/bhAPI/updateCart.php',data).pipe(map((res:any)=>res));
  }

  public signupSer(data){
    return this.httpClient.post('http://localhost/bhAPI/signup.php',data).pipe(map((res:any)=>res));
  }
  public signinSer(data){
    return this.httpClient.post('http://localhost/bhAPI/signin.php',data).pipe(map((res:any)=>res));
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
