import { CookieService } from 'ngx-cookie-service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * The RoleGuard implementation of canActivate guards routes from users without the proper role cookie.
 * It checks the role cookie against the routes that are passed into the data property of the route
 * as a String array.
 *
 * example usage in a route:
 * {
 *  path: 'panel',
 *  component: PanelComponent,
 *  canActivate: [RoleGuard],
 *  data: {roles: [RoleGuard.roles.vpRole, RoleGuard.roles.qcRole]}
 * }
 *
 * @export
 * @class RoleGuard
 * @implements {CanActivate}
 */
@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private cookies: CookieService) {
  }

  /**
   * canActivate is the method that implments the guard logic.  It checks if the role
   * cookie is in the list of approved roles passed to the data.roles property of the route.
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   * @memberof RoleGuard
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return route.data['roles'].includes(this.cookies.get('role'));
  }
}

/**
 * roles is a convenience object that holds the different Strings that will
 * be found in the role cookie.
 */
export const roles = {
  vpRole: 'ROLE_VP',
  panelRole: 'ROLE_PANEL',
  qcRole: 'ROLE_QC',
  trainerRole: 'ROLE_TRAINER',
  stagingRole: 'ROLE_STAGING',
  screenerRole: 'ROLE_SCREENER',
};
