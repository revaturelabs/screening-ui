import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Importing the routes from app routes
import { routes } from './app.routes';
// Component Imports Alphabetically
import { AnswerComponent } from './components/answer/answer.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { LoginComponent } from './components/login/login.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { SkillTypesComponent } from './components/skillTypes/skillTypes.component';
import { ViolationFlagComponent } from './components/violation-flag/violation-flag.component';


// Services
import { AlertsService } from './services/alert-service/alerts.service';
import { BucketsService } from './services/buckets/buckets.service';
import { GambitBatchUtilService } from './services/gambit-batch-util/gambit-batch-util.service';
import { HttpErrorHandlerService } from './services/http-error/http-error-handler.service';
import { QuestionScoreService } from './services/question-score/question-score.service';
import { QuestionsService } from './services/questions/questions.service';
import { ScheduleScreeningService } from './services/schedule-screening/schedule-screening.service';
import { ScreenerBucketsService } from './services/screener-buckets/screener-buckets.service';
import { ScreeningService } from './services/screening/screening.service';
import { SimpleTraineeService } from './services/simpleTrainee/simple-trainee.service';
import { SkillTypesService } from './services/skill-types/skill-types.service';
import { SkillTypeBucketService } from './services/skillTypeBucketLookup/skill-type-bucket.service';
import { SoftSkillsService } from './services/soft-skills/soft-skills.service';
import { SoftSkillsViolationService } from './services/soft-skills-violation/soft-skills-violation.service';
import { UrlService } from './services/urls/url.service';
import { ViolationTypeService } from './services/violationType/violationType.service';
import { ApiService } from './services/api/api.service';

// Pipes
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';
import { BucketFilterPipe } from './pipes/skillType-buckets.filter';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { GraphDataPipe } from './pipes/graph-data.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe';
import { TierPipe } from './pipes/tier-pipe';
import { ToolbarFilterPipe } from './pipes/toolbar-filter.pipe';
import { TraineeSearch } from './pipes/trainee-search.pipe';
import { TrainerPipePipe } from './pipes/trainer-pipe.pipe';


import { NavModule } from './nav.module';
import { RoleGuard } from './role-guard';
import { HttpClientModule } from '@angular/common/http';
import { CandidateComponent } from './components/candidate/candidate.component';
import { NavBarService } from './services/nav-bar/nav-bar.service';

@NgModule({
  
  declarations: [
    // components
    AlertsComponent,
    AppComponent,
    AnswerComponent,
    CandidatesScreeningListComponent,
    FinalReportComponent,
    IntroductionComponent,
    LoginComponent,
    PassFailComponent,
    QuestionComponent,
    QuestionsTableComponent,
    ScreeningComponent,
    ScreeningConfigComponent,
    SettingsComponent,
    SkillTypeBucketsComponent,
    SkillTypesComponent,
    ViolationFlagComponent,
    CandidateComponent,
    // pipes
    ArrToStringPipe,
    BucketFilterPipe,
    FilterByPipe,
    GraphDataPipe,
    OrderByPipe,
    SearchPipe,
    TierPipe,
    ToolbarFilterPipe,
    TraineeSearch,
    TrainerPipePipe,
  ],
  entryComponents: [
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgxPaginationModule,
    NavModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlertsService,
    ApiService,
    BucketsService,
    GambitBatchUtilService,
    HttpErrorHandlerService,
    QuestionScoreService,
    QuestionsService,
    SimpleTraineeService,
    ScheduleScreeningService,
    ScreenerBucketsService,
    ScreeningService,
    RoleGuard,
    SkillTypesService,
    SkillTypeBucketService,
    SoftSkillsService,
    SoftSkillsViolationService,
    UrlService,
    ViolationTypeService,
    NavBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
