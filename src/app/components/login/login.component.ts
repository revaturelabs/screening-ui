import { Component, OnInit, Input} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { Router, ActivatedRoute } from '@angular/router';

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

    UserPoolid: string = 'us-east-2_9g9079yQ6';
    ClientId: string ='5uif01evi71ca2dcsqecdsqj9q';
    poolData = { UserPoolId : this.UserPoolid, ClientId : this.ClientId };
    userPool = new CognitoUserPool(this.poolData);
    userData;
    authenticationData;
    authenticationDetails;
    cognitoUser;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cookies: CookieService,
        public nav: NavBarService
         ) {}

    ngOnInit() {
        this.nav.hide();
        this.signOut();
        this.clearStorage();
    }

    login() {
        this.userData = { Username: this.username, Pool: this.userPool };
        this.authenticationData = { Username : this.username, Password : this.password };
        this.authenticationDetails = new AuthenticationDetails(this.authenticationData);
        this.cognitoUser = new CognitoUser(this.userData);

        // Method that calls Cognito
        this.cognitoUser.authenticateUser(this.authenticationDetails, {
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                const newPassword = prompt('Enter new password ', 'password');
                delete userAttributes.email_verified;
                this.cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
            },
            // Called when a dataset updated/downloaded 
            onSuccess: function (result) {
                console.log(result);
                // Turns the result into an object we can interact with
                const decPayload = result.getIdToken().decodePayload();
                console.log(decPayload);
                // Iterate through the result/payload to find the user's groups
                for (const value of Object.values(decPayload)) {
                    console.log(value);
                    switch(value.toString()){
                        // Each type of user will have it's own case
                        case "ROLE_VP":                  
                        case "ROLE_SCREENER":      
                            localStorage.setItem('role', value.toString());         
                            break;
                        default: // do nothing
                            break;
                    }
                }
            },
            // Called when there is an exception during synchronization
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err));
            }, 
        });
        this.setCookie(localStorage.getItem('role'));
        this.checkLogin();
    }

    // This will run after you press the login button to see if the credentials were correct
    // If they are navigate to the home screen
    checkLogin(){
        var cookie = this.cookies.get('role');
        console.log(cookie);
        switch (cookie){
            case "ROLE_VP":                  
            case "ROLE_SCREENER":     
                this.router.navigate(['/home']);
                break;
            default: // do nothing
                break;
        }
    }

    // Sets the cookie we will use to authenticate in the applicaiton
    setCookie(role:string){
        this.cookies.set('role', role);
    }

    //This is the method to sign a user out of a Cognito Session
    signOut(){
        if (this.cognitoUser != null){
            this.cognitoUser.signOut();
        }
    }

    clearStorage(){
        // Get rid of the items stored in local storage
        localStorage.clear();
        // Clear previous tokens
        this.cookies.deleteAll();
    }
}
