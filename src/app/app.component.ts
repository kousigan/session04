import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sub:any;
  id:any;
  _login:boolean;
  shown: string;
  logincontroll:string;
  accordian:boolean;

  constructor(private router:Router, private activeRoute:ActivatedRoute,private _us:UserService){
      this.accordian=false;
      
      
      this.sub=this.activeRoute.params.subscribe(params=>this.id=+params)
          
      if(this.id!=null){
        this.accordian=true;
      }
      this.logincontroll="login";
    }

    ontoggle(i){
    if(i==true){
      this.accordian= true;
    }
    else{
      this.accordian=false;
    }
  }
  userLogin(){ 
    if(this._us._loginstatus=="login"){
        
      this.router.navigate(['login'])
       
    }
  }
}
