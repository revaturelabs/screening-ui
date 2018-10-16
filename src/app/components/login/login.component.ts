import { Component, OnInit, Input} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

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
        // private cognitoUserPool: CognitoUserPool, 
        // private cognitoUserAttribute: CognitoUserAttribute,
        // private cognitoUser: CognitoUser
         ) {}

    ngOnInit() {}

    login() {
        var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
    
    // This is needed set up the Cognito user pool in JS
    //setUserPool(){
        // Credentials of our userpool
        var poolData = { 
            UserPoolId : 'us-east-2_9g9079yQ6', // Screenforce's user pool id
            ClientId : '7r1d35gav9lo9dm4dfjbgkmlks' // Screenforce's app client id
         };

        // Create a pool object with the pool data
        var userPool = new AmazonCognitoIdentity.cognitoUserPool(poolData);
        
        // Set up the user data with the Pool object and our username
        var userData = {
           Username : 'username',
           Pool : userPool
        };
    //}

        // Username/password of the user we are logging in
        var authenticationData = { 
            Username : 'username', 
            Password : 'password',
            };
        
        // Create an authDetail object based on our credentials
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

        // Create a user instance for cognito
        var cogUser = new AmazonCognitoIdentity.cognitoUser(userData);
        
        // Method that calls 
        cogUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                var accessToken = result.getAccessToken().getJwtToken();
                var idToken = result.idToken.jwtToken;
                var refreshToken = result.refreshToken.jwtToken;
                // Logs for testing purposes only
                console.log(accessToken);
                console.log(idToken);
                console.log(refreshToken);
            },
            onFailure: function(err) {
                alert(err);
            },
        });
   
    }

    // This method will set the cookie we will use to authenticate in the rest of the applicaiton
    setCookie(role:string){
        // This cookie, Role, is what will be called throught the application
        this.cookies.set( 'role', role);
    }

    // Set up Sign in Method
    // signOut(){
    //     if (cognitoUser != null){
    //         cognitoUser.signOut();
    //     }
    // }
}