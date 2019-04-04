import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable()
export class AuthenticationService implements CanActivate {

  constructor(private http: HttpClient, private router:Router) { }

  canActivate(): boolean
  {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
      return true;
    }
    this.router.navigateByUrl('/login');
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
