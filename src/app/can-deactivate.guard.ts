import { Injectable }           from '@angular/core';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';

import { NavComponent } from './components/nav/nav.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<NavComponent> {
  
  canDeactivate(
    component: NavComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Allow synchronous navigation if not screening
    if (!state.url.includes('/screening')) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    if (confirm("You are about to leave a screening, press ok to continue.")) {
      
      return true;
  } else {
      return false;
  }
  }
}