import { Routes } from '@angular/router';
import { RoleGuard, roles } from './role-guard';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { QuestionComponent } from './components/question/question.component';
import { MasterReportComponent } from './components/reports/master-report/master-report.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthenticationService],
    // a list of roles that can access the resource -- in this case all of them
    data: { roles: ['ROLE_REPORTING', 'ROLE_SCREENER', 'ROLE_ADMIN'] },
    children: [
      {
        path: 'reports',
        component: MasterReportComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: CandidatesScreeningListComponent
      },
      {
        path: 'screening',
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
    ]
  },
  {
    path: 'settings',
    canActivate: [AuthenticationService],
    data: { roles: ['ROLE_ADMIN'] },
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
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'

  },
];


