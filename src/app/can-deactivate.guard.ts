import { Injectable }           from '@angular/core';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';
import { Observable }    from 'rxjs';

import { ScreeningComponent } from './components/screening/screening.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<ScreeningComponent> {

  canDeactivate(
    component: ScreeningComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean>{
    // Allow synchronous navigation if not screening
    if(state.url.includes('/screening')){
      return (() => component.canDeactivate())();
    }
    else 
      return true;
    //return (() => this.Nav.canDeactivate())();
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    //if (confirm("You are about to leave a screening, press ok to continue.")) {
    //  return true;
  //} else {
  //    return false;
  //}
  }
}