import { Component ,OnInit , OnDestroy} from '@angular/core';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
   providers:[UserService]
})
export class BlogComponent implements  OnDestroy  {

 
  private sub: any;
  blogPosts:post[];

 newname:any='Routing Success!!';
  constructor(private userService:UserService,private router:Router,private ds:DataService ) { 

   this.sub = this.userService.getPost().subscribe(posts=> this.blogPosts=posts);
 
}
 

 
  gotopost(i){
    this.ds.insertData(i);
    this.router.navigate(['/post',i]);
    
  }
 
 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }          
}

class post{
  id:number;
  title:string;
  body:string;
}