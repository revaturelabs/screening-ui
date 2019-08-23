import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningConfigComponent } from './screening-config.component';
import { SkillTypeBucketsComponent } from '../skillType-buckets/skillType-buckets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillTypesComponent } from '../skillTypes/skillTypes.component';
import { CandidateComponent } from '../candidate/candidate.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BucketsService } from 'src/app/services/buckets/buckets.service';
import { UrlService } from 'src/app/services/urls/url.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';

describe('ScreeningComponent', () => {
  let component: ScreeningConfigComponent;
  let fixture: ComponentFixture<ScreeningConfigComponent>;
let mockBucketService:BucketsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule.forRoot(), FormsModule, RouterTestingModule, HttpClientModule, HttpModule],
      declarations: [ ScreeningConfigComponent, SkillTypeBucketsComponent, SkillTypesComponent, CandidateComponent ],
      providers: [BucketsService, UrlService, AlertsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (done: DoneFn) => {
    expect(component).toBeTruthy();
    done();
  });
});
