import { Component, OnInit } from '@angular/core';
 import { DataService } from '../service/data.service';
 import { UserService } from '../service/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css'] ,
  providers:[UserService]
})
export class MypostComponent implements OnInit {
 
  test: number=1;
  _mypost:mypost;
  _temp:mypost; 
  constructor(  private activepost:UserService,  private ds:DataService) {
     //this.activepost.getPost().subscribe(posts=>console.log(this._mypost=posts));
    this.test=this.test+this.ds.dataString;
      
      this.fetchpost(this.test);
    
  }
  ngOnInit() {
    
  }
  fetchpost(n:number){
     
    this.activepost.getActivePost(n).subscribe(post =>this._mypost = post);
  

  }
   
  ngOnDestroy() {
     
  }  
}


class mypost{
  userid:number;
  id:number;
  title:string;
  body:string;
}