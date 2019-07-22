import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
import {FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  showFiller = false;
  postData : any;
  userList : any;
  first_name : any;
  last_name : any;
  to_user_name ="";
  to_profile_photo="";
  to_user_id :any;
  chatList=[];
  chatForm: FormGroup;
  initialImage=false;
  current_user_id : any;
  yesContact =false;
  noContact = true;
  constructor(private chatService : ChatService) { }

  ngOnInit() {
    this.current_user_id = localStorage.getItem('user_id');
    this.first_name = localStorage.getItem('first_name');
    this.last_name = localStorage.getItem('last_name');
    this.postData = {
      "user_id":localStorage.getItem('user_id')
    }
    this.chatService.getChatUserList(this.postData).subscribe(responce=>{
      if(responce.success==true){
        this.userList = responce.data;
        console.log(responce.data);
      }
    });

    this.chatForm = new FormGroup({
      "message" : new FormControl(null,Validators.required),
      "from_user_id" : new FormControl(null,Validators.required),
      "from_user_name" : new FormControl(null,Validators.required),
      "from_profile_photo" : new FormControl(null,Validators.required),
      "to_user_id" : new FormControl(null,Validators.required),
      "to_user_name" : new FormControl(null,Validators.required),
      "to_profile_photo" : new FormControl(null,Validators.required),
     });
     
      
     
  }
  sendMessage(data){
    this.chatService.saveChats(data.value).subscribe(responce=>{
      if(responce.success==true){
        this.getChatList(data.value.to_user_id);
        this.chatForm.patchValue({
          "message" : ""
        });
      }else{

      }

    });
    
  }
  getUserDetails(to_user_id){
    this.postData = {
      "from_user_id":localStorage.getItem('user_id'),
      "to_user_id" : to_user_id
    }
    this.chatService.getChatUserDetails(this.postData).subscribe(responce=>{
        if(responce.success==true){
          this.chatForm.patchValue({
            "from_user_id" : localStorage.getItem('user_id'),
            "from_user_name" : localStorage.getItem('first_name')+" "+localStorage.getItem('last_name'),
            "from_profile_photo" : localStorage.getItem('profile_photo'),
            "to_user_id" : responce.data.user_id,
            "to_user_name" : responce.data.first_name+" "+responce.data.last_name,
            "to_profile_photo" : responce.data.profile_photo,
          });
          this.to_user_name = responce.data.first_name+" "+responce.data.last_name;
          this.to_profile_photo = responce.data.profile_photo;
          this.initialImage=true;
        }
    });
    this.getChatList(to_user_id);
    this.yesContact=true;
    this.noContact=false;
    // setInterval(function(){ 
    //   this.getChatList(to_user_id)
    //   //console.log('set time',to_user_id);
    //  }, 1000);

  //    setInterval(() => {
  //     this.getChatList(to_user_id);
  // }, 8000);
  }
  getChatList(to_user_id){
    this.postData={
      "from_user_id":localStorage.getItem('user_id'),
      "to_user_id":to_user_id
    }
    this.chatService.getChat(this.postData).subscribe(responce=>{
      if(responce.success==true){
        this.chatList = responce.data;
      }else{
        this.chatList = [];
      }
      
    });
  }
}
