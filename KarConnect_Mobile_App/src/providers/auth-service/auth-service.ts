import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User.interface';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class AuthServiceProvider {
  baseURL:string = "https://karconnect.tk/api";
  constructor(private http: Http) {
    
  }

   login(user:User) : Observable<User>{
     alert(JSON.stringify(user));
     let headers = new Headers();
     headers.append("Content-Type", "application/json");
     return this.http.post(this.baseURL+"/login", user,{headers})
     .map((data : Response) => data.json())
  }
}
interface token {
  token:string;
}