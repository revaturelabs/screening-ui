import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningConfigComponent } from './screening-config.component';
import { SkillTypeBucketsComponent } from '../skillType-buckets/skillType-buckets.component';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { SkillTypesComponent } from '../skillTypes/skillTypes.component';
import { CandidateComponent } from '../candidate/candidate.component';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BucketsService } from 'src/app/services/buckets/buckets.service';
import { UrlService } from 'src/app/services/urls/url.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { SkillTypeBucketService } from 'src/app/services/skillTypeBucketLookup/skill-type-bucket.service';

describe('ScreeningConfigComponent', () => {
  let component: ScreeningConfigComponent;
  let fixture: ComponentFixture<ScreeningConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ ScreeningConfigComponent, SkillTypeBucketsComponent, SkillTypesComponent, CandidateComponent ],
      providers: [BucketsService, UrlService, AlertsService, FormBuilder, SkillTypesService, SkillTypeBucketService, NgbTabset]
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
