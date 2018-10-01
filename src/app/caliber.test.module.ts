// modules
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClient } from '@angular/common/http';
// import { SimpleNotificationsModule } from 'angular2-notifications-lite';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { routes } from './app.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
// import { BatchService } from './services/batch.service';
// import { TraineeService } from './services/trainee.service';
// import { AssessmentService } from './services/assessment.service';
// import { RouteService } from './services/route.service';
// import { PanelService } from './services/panel.service';
// import { GradeService } from './services/grade.service';
// import { NoteService } from './services/note.service';
// import { GranularityService } from './reports/services/granularity.service';
// import { ReportingService } from './services/reporting.service';
// import { PDFService } from './services/pdf.service';
// import { TrainingTypeService } from './services/training-type.service';
// import { ColorService } from './services/colors/color.service';
// import { VpHomeLineGraphService } from './services/graph/vp-home-line-graph.service';
// import { VpHomeSelectorService } from './services/selector/vp-home-selector.service';
// import { LocationService } from './services/location.service';
// import { LocationService } from '../../gambit-client/services/location/location.service';
// import { VpHomeBarGraphService } from './services/graph/vp-home-bar-graph.service';
// import { VpHomePanelGraphService } from './services/graph/vp-home-panel-graph.service';
import { AlertsService } from './services/alert-service/alerts.service';
// import { EvaluationService } from './services/evaluation.service';
// import { QCStatusService } from './services/qcstatus.service';
// import { TraineeStatusService } from './services/trainee-status.service';
import { SimpleTraineeService } from './services/simpleTrainee/simple-trainee.service';
import { QuestionService } from './services/question/question.service';
// import { QuestionsToBucketsUtil } from './screening/util/questionsToBuckets.util';
// import { QuestionScoreService } from './screening/services/question-score/question-score.service';
import { SkillTypesService } from './services/skill-types/skill-types.service';
// import { SoftSkillsService } from './services/soft-skills/soft-skills.service';
// import { SoftSkillsViolationService } from './services/soft-skills-violation/soft-skills-violation.service';

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
// import { GambitBatchUtilService } from './services/gambit-batch-util/gambit-batch-util.service';
import { ScheduleScreeningService } from './services/schedule-screening/schedule-screening.service';

// N.T.
import { ApiService } from './services/api/api.service';

// pipes
// import { GradeByTraineeByAssessmentPipe } from './pipes/grade-by-trainee-by-assessment.pipe';
// import { GraphDataPipe } from './pipes/graph-data.pipe';
// import { TierPipe } from './pipes/tier-pipe';
// import { TrainerPipePipe } from './pipes/trainer-pipe.pipe';
// import { OrderByPipe } from './pipes/order-by.pipe';
// import { BatchByTrainerPipe } from './pipes/trainerbatch.pipe';
// import { NoteByTraineeByWeekPipe } from './pipes/note-by-trainee-by-week.pipe';
// import { DisplayBatchByYear } from './pipes/display-batch-by-year.pipe';
// import { FilterByPipe } from './pipes/filter-by.pipe';
// import { ToolbarFilterPipe } from './pipes/toolbar-filter.pipe';
// import { AddressToStringPipe } from './pipes/address-to-string.pipe';
// import { TraineeSearch } from './pipes/trainee-search.pipe';
// import { ArrToStringPipe } from './pipes/arr-to-string.pipe';
// import { BucketFilterPipe } from './settings/screening/skillType-buckets/skillType-buckets.filter';
// import { SearchPipe } from './pipes/search.pipe';

// components
// import { CaliberComponent } from './caliber.component';
// import { HomeComponent } from './home/home.component';
// import { AssessComponent } from './assess/assess.component';
// import { NavComponent } from '../../nav/nav.component';
// import { ManageComponent } from './manage/manage.component';
// import { ReportsComponent } from './reports/reports.component';
// import { AllCumulativeScoresComponent } from './reports/all-cumulative-scores/all-cumulative-scores.component';
// import { TraineeTechSkillsComponent } from './reports/trainee-tech-skills/trainee-tech-skills.component';
// import { ToolbarComponent } from './reports/toolbar/toolbar.component';
// import { PanelComponent } from './panel/panel/panel.component';
// import { OverallFeedbackComponent } from './reports/overall-feedback/overall-feedback.component';
import { TrainerProfilesComponent } from './components/trainer-profile/trainer-profile.component';
// import { PanelTableComponent } from './panel/panel-table/panel-table.component';
// import { PanelSearchbarComponent } from './panel/panel-searchbar/panel-searchbar.component';
// import { InterviewDetailsComponent } from './panel/interview-details/interview-details.component';
// import { CreatePanelComponent } from './panel/create-panel/create-panel.component';
// import { VpBarGraphComponent } from './home/vp-bar-graph/vp-bar-graph.component';
// import { VpLineGraphComponent } from './home/vp-line-graph/vp-line-graph.component';
// import { VpPanelGraphComponent } from './home/vp-panel-graph/vp-panel-graph.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SkillsComponent } from './components/skills/skills.component';
// import { LocationsComponent } from './settings/locations/locations.component';
import { TrainersComponent } from './components/trainers/trainers.component';
// import { DeactivateLocationComponent } from './settings/locations/deactivatelocation/deactivatelocation.component';
// import { EditlocationComponent } from './settings/locations/editlocation/editlocation.component';
// import { CreatelocationComponent } from './settings/locations/createlocation/createlocation.component';
// import { QualityComponent } from './quality/quality.component';
// import { GraphComponent } from './reports/graph/graph.component';
// import { TableComponent } from './reports/table/table.component';
// import { PanelBatchAllTraineesComponent } from './reports/panel-batch-all-trainees/panel-batch-all-trainees.component';
// import { QualityFeedbackComponent } from './quality/quality-feedback/quality-feedback.component';
// import { BatchOverallLineChartComponent } from './reports/batch-overall-line-chart/batch-overall-line-chart.component';
// import { PanelFeedbackComponent } from './reports/panel-feedback/panel-feedback.component';
// import { AssessmentBreakdownComponent } from './reports/assessment-breakdown/assessment-breakdown.component';
// import { WeeklyFeedbackComponent } from './reports/weekly-feedback/weekly-feedback.component';
// import { WeeklyGradesComponent } from './reports/weekly-grades/weekly-grades.component';
// import { WeeklyAuditComponent } from './reports/weekly-audit/weekly-audit.component';
// import { WeeklyCumulativeScoreComponent } from './reports/weekly-cumulative-scores/weekly-cumulative-scores.component';
// import { AlertsComponent } from './alerts/alerts.component';
// import { ReactivateLocationComponent } from './settings/locations/reactivatelocation/reactivatelocation.component';
// import { BarGraphModalComponent } from './home/vp-bar-graph/bar-graph-modal/bargraphmodal.component';
// import { ReportsService } from './services/reports.service';
// import { GeneralFeedbackComponent } from './panel/general-feedback/general-feedback.component';
// import { TechnicalFeedbackComponent } from './panel/technical-feedback/technical-feedback.component';
// import { QcDoughnutComponent } from './reports/qc-doughnut/qc-doughnut.component';
// import { BatchModalComponent } from './manage/batch/batch-modal.component';
// import { PanelOverallFeedbackComponent } from './panel/overall-feedback/panel-overall-feedback.component';
// import { FeedbackIconComponent } from './quality/feedback-icon/feedback-icon.component';
// import { QualityOverallFeedbackComponent } from './quality/quality-overall-feedback/quality-overall-feedback.component';
// import { TraineeLineChartComponent } from './reports/trainee-line-chart/trainee-line-chart.component';
import { ScreeningComponent } from './components/screening/screening.component';
// import { CandidatesScreeningListComponent } from './screening/components/candidates-screening-list/candidates-screening-list.component';
// import { QuestionsTableComponent } from './screening/components/questions-table/questions-table.component';
// import { DeleteBatchModalComponent } from './manage/delete-batch-modal/delete-batch-modal.component';
// import { CannotDeleteModalComponent } from './manage/cannot-delete-modal/cannot-delete-modal.component';
// import { DeleteTraineeModalComponent } from './manage/delete-trainee-modal/delete-trainee-modal.component';
// import { CannotDeleteTraineeModalComponent } from './manage/cannot-delete-trainee-modal/cannot-delete-trainee-modal.component';
// import { FinalReportComponent } from './screening/components/final-report/final-report.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AnswerComponent } from './components/answer/answer.component';
import { PassFailComponent } from './components/pass-fail/pass-fail.component';
import { ViolationFlagComponent } from './components/violation-flag/violation-flag.component';
import { ScreeningConfigComponent } from './components/screening-config/screening-config.component';
import { SkillTypesComponent } from './components/skillTypes/skillTypes.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { SkillTypeBucketsComponent } from './components/skillType-buckets/skillType-buckets.component';
import { QuestionComponent } from './components/question/question.component';

// import { PDFService } from './services/pdf.service';
// import { ReportingService } from './services/reporting.service';
// import { CategoryService } from './services/category/category.service';
// import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

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
    // GraphDataPipe,
    // PanelBatchAllTraineesComponent,
    // GradeByTraineeByAssessmentPipe,
    // DisplayBatchByYear,
    // BatchByTrainerPipe,
    // NoteByTraineeByWeekPipe,
    // TierPipe,
    // TrainerPipePipe,
    // OrderByPipe,
    // GradeByTraineeByAssessmentPipe,
    // BatchByTrainerPipe,
    // GeneralFeedbackComponent,
    // TechnicalFeedbackComponent,
    // AddressToStringPipe,
    // GraphDataPipe,
    // OrderByPipe,
    // FilterByPipe,
    // ToolbarFilterPipe,
    // TraineeSearch,
    // ArrToStringPipe,
    SearchPipe,
    // BucketFilterPipe,
    // TagFilterPipe,

    // components
    // PaginationControlsComponent,
    // CaliberComponent,
    // HomeComponent,
    // AssessComponent,
    // ManageComponent,
    // ReportsComponent,
    // AllCumulativeScoresComponent,
    // VpBarGraphComponent,
    // VpLineGraphComponent,
    // VpPanelGraphComponent,
    SettingsComponent,
    TrainersComponent,
    // LocationsComponent,
    // DeactivateLocationComponent,
    // EditlocationComponent,
    // CreatelocationComponent,
    // PanelComponent,
    // QualityComponent,
    // TraineeTechSkillsComponent,
    SkillsComponent,
    // ToolbarComponent,
    // GraphComponent,
    // TableComponent,
    TrainerProfilesComponent,
    // PanelComponent,
    // OverallFeedbackComponent,
    // QualityFeedbackComponent,
    // PanelBatchAllTraineesComponent,
    // BatchOverallLineChartComponent,
    // AssessmentBreakdownComponent,
    // WeeklyFeedbackComponent,
    // WeeklyGradesComponent,
    // PanelFeedbackComponent,
    // WeeklyAuditComponent,
    // WeeklyCumulativeScoreComponent,
    // QcDoughnutComponent,
    // ReactivateLocationComponent,
    // AlertsComponent,
    // BarGraphModalComponent,
    // PanelBatchAllTraineesComponent,
    // PanelTableComponent,
    // PanelSearchbarComponent,
    // CreatePanelComponent,
    // InterviewDetailsComponent,
    // BatchModalComponent,
    // GeneralFeedbackComponent,
    // TechnicalFeedbackComponent,
    // PanelOverallFeedbackComponent,
    // FeedbackIconComponent,
    // QualityOverallFeedbackComponent,

        // components
        // PaginationControlsComponent,
        // CaliberComponent,
        // HomeComponent,
        // AssessComponent,
        // ManageComponent,
        // ReportsComponent,
        // AllCumulativeScoresComponent,
        // VpBarGraphComponent,
        // VpLineGraphComponent,
        // VpPanelGraphComponent,
        SettingsComponent,
        // CategoriesComponent,
        TrainersComponent,
        // LocationsComponent,
        // DeactivateLocationComponent,
        // EditlocationComponent,
        // CreatelocationComponent,
        // PanelComponent,
        // QualityComponent,
        // TraineeTechSkillsComponent,
        SkillsComponent,
        // ToolbarComponent,
        // GraphComponent,
        // TableComponent,
        TrainerProfilesComponent,
        // PanelComponent,
        // OverallFeedbackComponent,
        // QualityFeedbackComponent,
        // PanelBatchAllTraineesComponent,
        // BatchOverallLineChartComponent,
        // AssessmentBreakdownComponent,
        // WeeklyFeedbackComponent,
        // WeeklyGradesComponent,
        // PanelFeedbackComponent,
        // WeeklyAuditComponent,
        // WeeklyCumulativeScoreComponent,
        // QcDoughnutComponent,
        // ReactivateLocationComponent,
        // AlertsComponent,
        // BarGraphModalComponent,
        // PanelBatchAllTraineesComponent,
        // PanelTableComponent,
        // PanelSearchbarComponent,
        // CreatePanelComponent,
        // InterviewDetailsComponent,
        // BatchModalComponent,
        // GeneralFeedbackComponent,
        // TechnicalFeedbackComponent,
        // PanelOverallFeedbackComponent,
        // FeedbackIconComponent,
        // QualityOverallFeedbackComponent,
        // GeneralFeedbackComponent,
        // TechnicalFeedbackComponent,
        // QcDoughnutComponent,
        // TraineeLineChartComponent,
        // DeleteBatchModalComponent,
        // CannotDeleteModalComponent,
        // DeleteTraineeModalComponent,
        // CannotDeleteTraineeModalComponent,
        ScreeningConfigComponent,
        // CandidatesScreeningListComponent,
        // QuestionsTableComponent,
        // FinalReportComponent,
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
    // BatchService,
    TrainerService,
    // TraineeService,
    // AssessmentService,
    // RouteService,
    // PanelService,
    // RouteService,
    QuestionService,
    QuestionsService,
    BucketsService,
    // TagService,
    // TagsService,
    SimpleTraineeService,
    SkillTypesService,
    // QuestionScoreService,
    // QuestionsToBucketsUtil,
    ScreeningService,
    SkillTypeBucketService,
    ScheduleScreeningService,
    // ActivatedRoute,
    // GradeService,
    HttpClient,
    // NoteService,
    NgbModal,
    // NgbModalStack,
    // VpHomeLineGraphService,
    // VpHomeSelectorService,
    // ColorService,
    TrainerService,
    // LocationService,
    // GranularityService,
    AlertsService,
    // VpHomeBarGraphService,
    // VpHomePanelGraphService,
    // EvaluationService,
    // TrainingTypeService,
    // ReportsService,
    // QCStatusService,
    // TraineeStatusService,
    ApiService,
    // ReportingService,
    // PDFService,
    // PanelSearchbarComponent,
    NgbActiveModal,
    { provide: Router, useValue: {} },
    // GranularityService,
    GambitBatchUtilService,
    GambitBatchUtilService,
    UrlService,
    // CategoryService
  ],
  bootstrap: [
    // TrainersComponent
    // CaliberComponent
  ],
  exports: [
    // TraineeTechSkillsComponent,
    // TraineeLineChartComponent,
    ViolationFlagComponent,
    PaginatePipe,
  ],
  entryComponents: [
    // BarGraphModalComponent,
    // BatchModalComponent,
  ],
};
