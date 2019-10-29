import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningConfigComponent } from './screening-config.component';
import { SkillTypeCategoriesComponent } from '../skillType-categories/skillType-categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillTypesComponent } from '../skillTypes/skillTypes.component';
import { CandidateComponent } from '../candidate/candidate.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriesService } from '../../services/categories/categories.service';
import { UrlService } from '../../services/urls/url.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alert-service/alerts.service';

describe('ScreeningComponent', () => {
  let component: ScreeningConfigComponent;
  let fixture: ComponentFixture<ScreeningConfigComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule, RouterTestingModule, HttpClientModule],
      declarations: [ ScreeningConfigComponent, SkillTypeCategoriesComponent, SkillTypesComponent, CandidateComponent ],
      providers: [CategoriesService, UrlService, AlertsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
