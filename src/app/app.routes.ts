import { Routes } from '@angular/router';
import { RoleGuard, roles } from './role-guard';
import { SettingsComponent } from './components/settings/settings.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { QuestionComponent } from './components/question/question.component';

export const routes: Routes = [
  {
    path: '',
    component: CandidatesScreeningListComponent,
  },
  {
    path: 'screening',
    component: IntroductionComponent,
    // canActivate: [RoleGuard],
    // data: {
    //   roles: [
    //     roles.screenerRole, roles.vpRole
    //   ]
    // },
    children: [
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
    component: ScreeningConfigComponent,
    // canActivate: [RoleGuard],
    // data: {
    //   roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole]
    // },
    children: [
      {
        path: 'questions',
        component: QuestionComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'buckets',
        component: BucketComponent
      },
      {
        path: 'skillTypeTopics',
        component: SkillTypeBucketsComponent,
      }
    ]
  },
  {
    path: 'home',
    component: CandidatesScreeningListComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];
