import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [ LoginComponent ]
})
export class NavComponent implements OnInit {

  @Input()
  collapsed = false;

  @Output()
  collapse: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  visible = true;

  // private routeService: RouteService;
  // private routeSubscription: Subscription;
  private userRole;
  showHome = true;
  showManage: boolean;
  showAssess: boolean;
  showQuality: boolean;
  showPanel: boolean;
  showReports = true;

  constructor(
    private cookies: CookieService,
    public nav: NavBarService,
    private router: Router,
    private loginComponent: LoginComponent
  ) {}

  ngOnInit() {
    this.userRole = this.cookies.get('role');
    this.showHome = true;
    this.showManage = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_TRAINER' ||
      this.userRole === 'ROLE_QC' || this.userRole === 'ROLE_PANEL';
    this.showAssess = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_TRAINER';
    this.showQuality = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_QC';
    this.showPanel = this.userRole === 'ROLE_VP' || this.userRole === 'ROLE_PANEL';
    this.showReports = true;
    this.nav.show();
  }
  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.collapse.emit(this.collapsed);
  }
  logout() {
    this.loginComponent.signOut();
  }
}
