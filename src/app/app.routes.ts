import { Routes } from '@angular/router';
import { RoleGuard, roles } from './role-guard';
import { SettingsComponent } from './components/settings/settings.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { QuestionComponent } from './components/question/question.component';
import { AverageSkillComponent } from './components/reports/average-skill/average-skill.component';
import { MasterReportComponent } from './components/reports/master-report/master-report.component';
import { AdminTabComponent } from './components/admin-tab/admin-tab.component';
import {LoginComponent} from './components/login/login.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import {NotLoggedInComponent} from './components/not-logged-in/not-logged-in.component';
import { InsufficientPrivilagesComponent } from './components/insufficient-privilages/insufficient-privilages.component';
import { ExpiredCredentialsComponent } from './components/expired-credentials/expired-credentials.component';
import { FullBarDirective } from 'ng5-slider/slider.component';
import { AdminAuthenticationService } from './services/adminAuthentication/admin-authentication.service';
 
export const routes: Routes = [
  {
    path: 'expcreds',
    component: ExpiredCredentialsComponent
  },
  {
    path: 'noprivs',
    component: InsufficientPrivilagesComponent
  },
  { 
    path: 'nolog',
    component: NotLoggedInComponent
  },
  {
    path: '',
    component: CandidatesScreeningListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  
  {
    path: '',
    canActivate: [AuthenticationService],
    //component: CandidatesScreeningListComponent,
    children: [
  
  {
    path: 'reports',
    component: MasterReportComponent
  },
  {
    path: 'screening',
    component: ScreeningComponent,
    // canActivate: [RoleGuard],
    // data: {
    //   roles: [
    //     roles.screenerRole, roles.vpRole
    //   ]nng
    // },
    children: [
      {
        path: 'intro',
        component: IntroductionComponent,
      },
      
      {
        path: 'questions',
        component: QuestionsTableComponent,
      },
      {
        path: 'finalReport',
        component: FinalReportComponent,
      },
      {
        path: 'passFail',
        component: PassFailComponent
      }
    ]
  },
  
  {
    path: 'admin-tab',
    //canActivate: [AdminAuthenticationService],
    component: AdminTabComponent
  },
  {
    path: 'settings',
    //canActivate: [AdminAuthenticationService],
    component: SettingsComponent,
    // canActivate: [RoleGuard],
    // data: {
    //   roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole]
    // },
    children: [
      {
        path: 'main',
        component: ScreeningConfigComponent
      },
      {
        path: 'bucket',
        component: QuestionComponent
      }
    ]
  },
  {
    path: 'home',
    component: CandidatesScreeningListComponent,
  }]},
  {
    path: '**',
    pathMatch: 'full',

    redirectTo: '/home'
  }
];
