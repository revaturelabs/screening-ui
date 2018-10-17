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
    username:string;
    @Input()
    password:string;

    constructor( 
        private cookies: CookieService, 
        // private authenticationDetails: AuthenticationDetails,
        // private cognitoUser: CognitoUser,
        // private cognitoUserPool: CognitoUserPool,
         ) {}

    ngOnInit() {}

    login() {
       // var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

        // Credentials of our userpool
        var poolData = { 
            UserPoolId : 'us-east-2_9g9079yQ6', // Screenforce's user pool id
            ClientId : '7r1d35gav9lo9dm4dfjbgkmlks' // Screenforce's app client id
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

        // Create a user instance for cognito
        var cognitoUser = new CognitoUser(userData);
       // var cogUser = new AmazonCognitoIdentity.cognitoUser(userData);
        
        // Method that calls Cognito
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                // We should only need the access token for creating our cookies
                var accessToken = result.getAccessToken().getJwtToken();
                var idToken = result.getIdToken().getJwtToken();
                // Refresh token is used for restoring the other token(s) once they have ran out
                var refreshToken = result.getRefreshToken().getToken();
                // Logs for testing purposes only
                console.log(accessToken);
                console.log(idToken);
                console.log(refreshToken);
            },
            onFailure: function(err) {
                alert(err);
            },
        });
        // Add local storage check for token validation here
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