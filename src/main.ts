import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import App from './App';
import Amplify from 'aws-amplify';
//import amplify from './aws-exports';

let config = {

  "dev": {
      "awscloudformation": {
          "Region": "us-east-2",
          "User_Pool_Id": "us-east-2_Nv5CbdfXW",
          "App_Client_Id": "62bqmamg880buch1h6qsjup9cc",
      },
  }
};

//Ensures that we are connecting to the right user pool and havethe right id
Amplify.configure({    //.configure(amplify)
  Auth: {
    mandatorySignIn: true,
    region: config.dev.awscloudformation.Region,
    userPoolId: config.dev.awscloudformation.User_Pool_Id,
    userPoolWebClientId: config.dev.awscloudformation.App_Client_Id
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
