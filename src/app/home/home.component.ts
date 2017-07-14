import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service' ;
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:string;
  constructor( private userservice:UserService) { 

    this.user=this.userservice.username;
    console.log(this.userservice._loginstatus)
  }

  ngOnInit() {
  }

 
}
