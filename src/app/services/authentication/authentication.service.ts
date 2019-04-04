import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthenticationService implements CanActivate {

  constructor(private http: HttpClient) { }

  canActivate(): boolean
  {
    return false;
  }
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
