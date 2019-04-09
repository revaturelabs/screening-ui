import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-insufficient-privilages',
  templateUrl: './insufficient-privilages.component.html',
  styleUrls: ['./insufficient-privilages.component.css']
})
export class InsufficientPrivilagesComponent implements OnInit {

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
        'Sorry, you don\'t have access to this content. ' +
        'You will be redirected in ' + seconds + ' seconds.';
        console.log(seconds);
        seconds--
        if (seconds === 0) {
          console.log(router);
          // doesn't redirect. no idea why. (inconvenient hoisting?)
          router.navigateByUrl('login');
  
        }
      }
    },
  
      1000);
  
  };