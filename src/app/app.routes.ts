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
import { LoginComponent } from './components/login/login.component';

import { CanDeactivateGuard }    from './can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: CandidatesScreeningListComponent,
      canActivate: [RoleGuard],
      data: {
        roles: [ roles.screenerRole, roles.vpRole ]
      },
  },
  {
    path: 'list',
    component: CandidatesScreeningListComponent,
      canActivate: [RoleGuard],
      data: {
        roles: [ roles.screenerRole, roles.vpRole ]
      },
  },
  {
    path: 'screening',
    canDeactivate: [CanDeactivateGuard],
    component: ScreeningComponent,
      canActivate: [RoleGuard],
      data: {
        roles: [ roles.screenerRole, roles.vpRole ]
      },
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
    path: 'settings',
    component: SettingsComponent,
      canActivate: [RoleGuard],
      data: {
        roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole]
      },
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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];
