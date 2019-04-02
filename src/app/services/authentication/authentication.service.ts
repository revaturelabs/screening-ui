import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post<any>(`user/authenticate`,{username:username, password:password})
      .pipe(map(user =>{
        if(user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(){
    return true;
  }
}
