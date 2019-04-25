import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router, Event, NavigationEnd, NavigationCancel} from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  @Input()
  collapsed = false;

  @Output()
  collapse: EventEmitter<any> = new EventEmitter<any>();

  // private routeService: RouteService;
  // private routeSubscription: Subscription;
  private userRole;
  showHome: boolean;
  showLogin: boolean;
  showLogout: boolean;
  showReports: boolean;
  showAdmin: boolean;
  showSettings: boolean;
  attemptLogout: boolean = false;

  constructor( private router: Router, private authenticationService: AuthenticationService) {
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoles();
      }
      if (event instanceof NavigationCancel) {
        console.log(event);
      }
    })
   }

  ngOnInit() {
    this.checkRoles();
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.collapse.emit(this.collapsed);
  }

  toggleLogout() {
    if (this.attemptLogout) {
      return "block";
    } else {
      return "none";
    }
  }

  logout() {
    this.authenticationService.logout();
    this.attemptLogout = false;
  }

  checkRoles() {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.userRole = user["signInUserSession"]["idToken"]["payload"]["cognito:groups"][0];
    } else {
      this.userRole = '';
    }
    this.showHome = this.userRole !== '';
    this.showLogin = this.userRole === '';
    this.showLogout = this.userRole !== '';
    this.showReports = this.userRole === 'Role_Admin' || this.userRole === 'Role_Reporting' || this.userRole === 'Role_Screener';
    this.showAdmin = this.userRole === 'Role_Admin';
    this.showSettings = this.userRole === 'Role_Admin';
  }
}
