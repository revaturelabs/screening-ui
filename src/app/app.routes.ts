import { Routes } from '@angular/router';
import { RoleGuard, roles } from './role-guard';

// ::COMPONENTS::
// CALIBER COMPONENT -- USED AS BASE FOR CALIBER PORTAL
// WHAT TO SWITCH IT OUT WITH
// import { CaliberComponent } from './caliber.component';

import { SettingsComponent } from './components/settings/settings.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { TrainerProfilesComponent } from './components/trainer-profile/trainer-profile.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'screening',
        component: ScreeningComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [
            roles.screenerRole, roles.vpRole
          ]
        },
        children: [
          {
            path: 'pendingScreeningsList',
            component: CandidatesScreeningListComponent,
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
            path: 'introduction',
            component: IntroductionComponent,
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
            path: 'skills',
            component: SkillsComponent
          },
          {
            path: 'trainers',
            component: TrainersComponent
          },
          {
            path: 'trainer-profile',
            component: TrainerProfilesComponent,
          },
          {
            path: 'screening',
            component: ScreeningConfigComponent,
          },
          {
            path: 'screening/category',
            component: BucketComponent
          },
          {
            path: 'screening/skillTypeTopics',
            component: SkillTypeBucketsComponent,
          }
        ]
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/Caliber/home'
      }
    ]
  }
];
