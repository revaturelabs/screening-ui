import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-expired-credentials',
  templateUrl: './expired-credentials.component.html',
  styleUrls: ['./expired-credentials.component.css']
})
export class ExpiredCredentialsComponent implements OnInit {

  constructor(private router: RouterModule) { }

  ngOnInit() {
    console.log(this.router);
    redirectTimer(this.router);
  }

}
function redirectTimer(router: RouterModule) {
  let seconds = 5;
  let that = this;
  setInterval(function (router) {
    if (seconds >= 0) {

      document.getElementById('timeoutMessage').innerHTML =
      'Your credentials have expired for this session. ' +  
      'You will be redirected in ' + seconds + ' seconds.';
      console.log(seconds);
      seconds--
      if (seconds === 0) {
        console.log(router);
        // doesn't redirect. no idea why. (hoisting?)
        router.navigateByUrl('login');

      }
    }
  },

    1000);

};