import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
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
  //Dummy variable. Waiting for authentication to be set up.
  private isAdmin;
  showHome = true;
  showManage: boolean;
  showAssess: boolean;
  showQuality: boolean;
  showPanel: boolean;
  showReports = true;
  attemptLogout = false;

  constructor( private cookies: CookieService, private authenticationService: AuthenticationService) {
   }

  ngOnInit() {
    //this.userRole = this.cookies.get('role');
    this.userRole = 'ROLE_VP';
    this.showHome = true;
    this.showManage = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_TRAINER' ||
      this.userRole === 'ROLE_QC' || this.userRole === 'ROLE_PANEL';
    this.showAssess = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_TRAINER';
    this.showQuality = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_QC';
    this.showPanel = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_PANEL';
    this.showReports = true;
    this.isAdmin = true;
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
}
