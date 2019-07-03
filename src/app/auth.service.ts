import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    if(localStorage.getItem('user_id')=='null' || localStorage.getItem('user_id')==null){
      return false;
    }else{
      return true;
    }
    
  }
}
