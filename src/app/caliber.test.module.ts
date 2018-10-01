// modules
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { routes } from './app.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { AlertsService } from './services/alert-service/alerts.service';
import { SimpleTraineeService } from './services/simpleTrainee/simple-trainee.service';
import { QuestionService } from './services/question/question.service';
import { SkillTypesService } from './services/skill-types/skill-types.service';
import { ScreeningService } from './services/screening/screening.service';
import { SkillTypeBucketService } from './services/skillTypeBucketLookup/skill-type-bucket.service';
import { QuestionsService } from './services/questions/questions.service';
import { BucketsService } from './services/buckets/buckets.service';
/** for in memory data service
  * executed, 'npm i angular-in-memory-web-api --save', remove from packange.json if not in use.
  */
import { TrainerService } from './services/trainer/trainer.service';
import { GambitBatchUtilService } from './services/gambit-batch-util/gambit-batch-util.service';
import { UrlService } from './services/urls/url.service';
import { ScheduleScreeningService } from './services/schedule-screening/schedule-screening.service';

// N.T.
import { ApiService } from './services/api/api.service';

// pipes
import { SearchPipe } from './pipes/search.pipe';

// components
import { TrainerProfilesComponent } from './components/trainer-profile/trainer-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AnswerComponent } from './components/answer/answer.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ViolationFlagComponent } from './components/violation-flag/violation-flag.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { SkillTypesComponent } from './components/skillTypes/skillTypes.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { QuestionComponent } from './components/question/question.component';

import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

export const Dependencies = {
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    // ChartsModule,
    ReactiveFormsModule,
    // SimpleNotificationsModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  declarations: [
    // pipes
    SearchPipe,
    SettingsComponent,
    TrainersComponent,
    SkillsComponent,
    TrainerProfilesComponent,
    // components
    SettingsComponent,
    TrainersComponent,
    SkillsComponent,
    TrainerProfilesComponent,
    ScreeningConfigComponent,
    IntroductionComponent,
    AnswerComponent,
    PassFailComponent,
    ViolationFlagComponent,
    SkillTypesComponent,
    BucketComponent,
    SkillTypeBucketsComponent,
    QuestionComponent,
    ScreeningComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true },  // interceptor for all HTTP requests
    TrainerService,
    QuestionService,
    QuestionsService,
    BucketsService,
    SimpleTraineeService,
    SkillTypesService,
    ScreeningService,
    SkillTypeBucketService,
    ScheduleScreeningService,
    HttpClient,
    NgbModal,
    NgbModalStack,
    TrainerService,
    AlertsService,
    ApiService,
    NgbActiveModal,
    { provide: Router, useValue: {} },
    GambitBatchUtilService,
    GambitBatchUtilService,
    UrlService,
  ],
  bootstrap: [
  ],
  exports: [
    ViolationFlagComponent,
    PaginatePipe,
  ],
  entryComponents: [
  ],
};
