import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable()

export class UserService{
	postcluster: post[];
    activepost: post;

	constructor(private http: Http)
	{}
	
	getPost(){
		return this.http.get('./assets/myposts.json').map((res:Response)=>res.json());
	}
	
	// getMovies(): Observable<post[]> {
    //     return this.http.get('./assets/myposts.json')
    //         .map((res: Response) => res.json()['results']);
    // }

      getActivePost(id: number): Observable<post> {
          return this.getPost()
            .map(postcluster => postcluster.find(activepost => activepost.id == id));
      }
 
}

 



class post{
userid:number;
  id:number;
  title:string;
  body:string;
}