import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  totalCartItem : number=0;
  user_id = localStorage.getItem('user_id');
  firstName =localStorage.getItem('first_name');
  lastName = localStorage.getItem('last_name');
  emailId = localStorage.getItem('email_id');
  mobileNo = localStorage.getItem('mobile_no');
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

      // let data= {
      //    "name": "test",
      //    "birth_date": "05 May 2012",
      //    "gender": "male",
      //    "email": "test11@gmail.com",
      //    "profile_photo": "",
      //    "username": "test44",
      //    "password": "12345",
      //    "user_type": "student",
      //    "theme_color_code": "0,255,255",
      //  }
      // let data= {
      //   "username": "bhushanjire",
      //   "password": "12345"
      // }
       //return this.httpClient.post('http://localhost/nakatomi/api/user1/test',data).pipe(map((res:any)=>res));
      // return this.httpClient.post('http://ec2-13-211-168-172.ap-southeast-2.compute.amazonaws.com/apiDemo/api/user/login',data).pipe(map((res:any)=>res));
       //return this.httpClient.post('http://ec2-13-211-168-172.ap-southeast-2.compute.amazonaws.com/apiDemo/api/user/signup',data).pipe(map((res:any)=>res));
      
      // let data= 
      //   {
      //     "user_id": "71",
      //     "lesson_id": "7",
      //     "lesson_status" : "out",
      //     "dialog_id": "99999",
      //     "video_status": "play"
      //   }
      
      // return this.httpClient.post('http://ec2-13-211-168-172.ap-southeast-2.compute.amazonaws.com/apiDemo/api/lesson/lessonInOut',data).pipe(map((res:any)=>res));

       //return this.httpClient.get('http://ec2-13-211-168-172.ap-southeast-2.compute.amazonaws.com/apiDemo/api/lesson/lessonList').pipe(map((res:any)=>res));


       //return this.httpClient.post('http://ec2-13-211-168-172.ap-southeast-2.compute.amazonaws.com/nakatomiAPI/api/user/login',data).pipe(map((res:any)=>res));
       //return this.httpClient.post('http://ec2-13-211-168-172.ap-southeast-2.compute.amazonaws.com/nakatomi/test.php',data).pipe(map((res:any)=>res));

       
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
  public addMember(data){
    return this.httpClient.post('http://localhost/bhAPI/add_customer.php',data).pipe(map((res:any)=>res));
  }
  public customerList(data){
    return this.httpClient.post('http://localhost/bhAPI/customerList.php',data).pipe(map((res:any)=>res));
  }
  public updateCustomer(data){
    return this.httpClient.post('http://localhost/bhAPI/update_customer.php',data).pipe(map((res:any)=>res));
  }
  public deleteCustomer(data){
    return this.httpClient.post('http://localhost/bhAPI/delete_customer.php',data).pipe(map((res:any)=>res));
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
