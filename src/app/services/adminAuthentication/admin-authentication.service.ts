import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CanActivate, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService implements CanActivate {
  

  constructor(private auth:AuthenticationService, private router:Router) { }
  canActivate():boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
      return user.isAdmin;
    }
    
    return false;
  }
}
