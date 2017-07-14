import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'ang-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    _status:string;
  constructor(private us:UserService,private router:Router) {
    this._status="";
   }

  ngOnInit() {
 
  }
  
  newUser(data){
    if(this.us.usersdetails.indexOf(data)>-1)
    {
      this.us.updateUser(data)
      this.router.navigate(['/Angular_sessions'])
    }
    else{
      this._status="Please check Username!!"
      return false;
    }
      
  }

}
