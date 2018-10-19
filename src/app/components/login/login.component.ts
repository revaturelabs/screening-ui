import { Component, OnInit, Input} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    @Input()
    username: string;
    @Input()
    password: string;

    constructor(
        private cookies: CookieService
         ) {}

    ngOnInit() {}

    login() {
       // var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
        console.log("login button clicked");
        console.log(this.username);
        console.log(this.password);
        // Credentials of our userpool
        var poolData = {
            UserPoolId : 'us-east-2_9g9079yQ6', // Screenforce's user pool id
            ClientId : '5uif01evi71ca2dcsqecdsqj9q' // Screenforce's app client id
         };

        // Create a pool object with the pool data
        var userPool = new CognitoUserPool(poolData);
        //var userPool = new AmazonCognitoIdentity.cognitoUserPool(poolData);

        // Set up the user data with the Pool object and our username
        var userData = {
           Username : this.username, // Username of the person signing in
           Pool : userPool
        };

        // Username/password of the user we are logging in
        var authenticationData = {
            Username : this.username, // Username of the person signing in
            Password : this.password,
            };
        // Create an authDetail object based on our credentials
        var authenticationDetails = new AuthenticationDetails(authenticationData);
        //var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
            console.log(authenticationDetails);
        // Create a user instance for cognito
        var cognitoUser = new CognitoUser(userData);
       // var cogUser = new AmazonCognitoIdentity.cognitoUser(userData);
        console.log(cognitoUser);
        // Method that calls Cognito
        cognitoUser.authenticateUser(authenticationDetails, {
          newPasswordRequired: function(userAttributes, requiredAttributes) {
            console.log('password required');
            delete userAttributes.email_verified;
            cognitoUser.completeNewPasswordChallenge('password', userAttributes, this);
          },
            onSuccess: function (result) {
                // We should only need the access token for creating our cookies
                var accessToken = result.getAccessToken().getJwtToken();
                var idToken = result.getIdToken().getJwtToken();
                // Refresh token is used for restoring the other token(s) once they have ran out
                var refreshToken = result.getRefreshToken().getToken();
                // Logs for testing purposes only
                console.log(accessToken);
                //console.log(idToken);
               // console.log(refreshToken);
            },
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err));
                console.log(err);
            },
        });
        // Add local storage check for token validation here
        if (cognitoUser != null) {
          cognitoUser.getSession(function(err, session) {
              if (err) {
                  alert(err);
                  return;
              }
              console.log('session validity: ' + session.isValid());
          });
      }
        cognitoUser.getUserAttributes(function(err, result) {
          if (err) {
            alert(err.message || JSON.stringify(err));
            console.log('getUserAttributes');
            return;
          }
          for (let i = 0; i < result.length; i++) {
            console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
          }
        });
    }

    // This method will set the cookie we will use to authenticate in the rest of the applicaiton
    setCookie(role:string){
        // This cookie, role, is what will be called throught the application
        this.cookies.set( 'role', role);
    }

    // Set up Sign in Method
    // signOut(){
    //     if (cognitoUser != null){
    //         cognitoUser.signOut();
    //     }
    // }
}
