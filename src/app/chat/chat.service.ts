import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient : HttpClient) { }
  getChatUserList(data){
    return this.httpClient.post('http://localhost/egret_api/api/chat/chatUsers',data).pipe(map((res:any)=>res));
  }
  getChatUserDetails(data){
    return this.httpClient.post('http://localhost/egret_api/api/chat/getUserDetails',data).pipe(map((res:any)=>res));
  }
  saveChats(data){
    return this.httpClient.post('http://localhost/egret_api/api/chat/saveChats',data).pipe(map((res:any)=>res));
  }
  getChat(data){
    return this.httpClient.post('http://localhost/egret_api/api/chat/getChats',data).pipe(map((res:any)=>res));
  }
}
