import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-logged-in',
  templateUrl: './not-logged-in.component.html',
  styleUrls: ['./not-logged-in.component.css']
})
export class NotLoggedInComponent implements OnInit {

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
        'Uh-oh! You aren\'t logged in! ' +  
        'You will be redirected in ' + seconds + ' seconds.';
        console.log(seconds);
        seconds--
        if (seconds === 0) {
          console.log(router);
          // doesn't redirect. no idea why. (inconvenient hoisting?)
          router.navigateByUrl('/login');
  
        }
      }
    },
  
      1000);
  
  };
