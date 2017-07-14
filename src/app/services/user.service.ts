import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
username:string;
  usersdetails:String[];
  _loginstatus:string;
  constructor() {
    this.username="Guest"
    this.usersdetails=["kousi","Siva","Jana"]
    this._loginstatus="login"
   }

   updateUser(data){
      this._loginstatus="logout"
        
      return this.username=data;
      
   }
    
}
