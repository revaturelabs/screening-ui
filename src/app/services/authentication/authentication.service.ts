import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AmplifyService } from 'aws-amplify-angular';
import { async } from 'q';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable()
export class AuthenticationService implements CanActivate {


  constructor(private http: HttpClient, private router: Router, private amplifyService: AmplifyService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      let groups = user["signInUserSession"]["idToken"]["payload"]["cognito:groups"];
      //let groups;
      // if (user.username == "david.west@revature.portal"){
      //   groups = "ROLE_ADMIN";
      // }
      // else if (user.user == "adam.jones@revature.portal"){
      //   groups = "ROLE_SCREENER";
      // }
      // else{
      //   groups = "ROLE_REPORTING";
      // }

      let accessRoles = route.data['roles'];
      for (let role of groups) {
         if (accessRoles.includes(role)) return true;
      }
      

      
      return true;

      this.router.navigateByUrl('/noprivs')
      return false;
    } else {
      this.router.navigateByUrl('/nolog');
      return false;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

  async login(username: string, password: string) {
    try {
      const user = await this.amplifyService.auth().signIn(username, password);

      console.log(user)
      //check to make sure that the user is actually being authenticated using Cognito
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED' && false) {
        const { requiredAttributes } = user.challengeParam;
        // the array of required attributes, e.g ['email', 'phone_number']
        // You need to get the new password and required attributes from the UI inputs
        // and then trigger the following function with a button click
        // For example, the email and phone_number are required attributes

      } else {
        // The user directly signs in
        // console.log(user);

        //let temp = await this.amplifyService.auth().completeNewPassword(user, "PassWord", null);
        //await localStorage.setItem('temp', JSON.stringify(temp));

        await localStorage.setItem('user', JSON.stringify(user));
        await this.router.navigateByUrl('/home');

        // console.log(localStorage.getItem('user'))
      }

    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
      } else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        console.log(err);
      }
    }

  }

  logout() {
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return true;
  }
}
