
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule} from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavModule } from './nav.module';
import { Ng5SliderModule } from 'ng5-slider';
import { NgModule } from '@angular/core';

// Importing the routes from app routes
import { routes } from './app.routes';

// Component Imports Alphabetically
// Root Component
import { AppComponent } from './app.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AnswerComponent } from './components/answer/answer.component';
import { AverageBucketTypeComponent } from './components/reports/average-bucket-type/average-bucket-type.component';
import { AverageSkillComponent} from './components/reports/average-skill/average-skill.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
import { FinalReportComponent } from './components/final-report/final-report.component';
import { HardestQuestionsComponent } from './components/reports/hardest-questions/hardest-questions.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MasterReportComponent } from './components/reports/master-report/master-report.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
import { ReportSidebarComponent } from './components/reports/report-sidebar/report-sidebar.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { SkillTypesComponent } from './components/skillTypes/skillTypes.component';
import { ViolationsByTypeComponent } from  './components/reports/violations-by-type/violations-by-type.component';
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

import { RoleGuard } from './role-guard';


@NgModule({
  declarations: [
    // components
    AlertsComponent,
    AppComponent,
    AnswerComponent,
    CandidatesScreeningListComponent,
    FinalReportComponent,
    IntroductionComponent,
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
    AverageSkillComponent,
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
    AverageBucketTypeComponent,
    MasterReportComponent,
    ReportSidebarComponent,
    HardestQuestionsComponent,
    ViolationsByTypeComponent,
  ],
  imports: [    
    BrowserAnimationsModule,
    BrowserModule,    
    FormsModule,        
    HighchartsChartModule,
    HttpClientModule,
    HttpModule,
    NavModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    Ng5SliderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
