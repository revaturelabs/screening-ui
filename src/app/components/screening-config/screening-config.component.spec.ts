import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ScreeningConfigComponent } from './screening-config.component';
import { SkillTypeBucketsComponent } from '../skillType-buckets/skillType-buckets.component';
import { NgbTab, NgbTabContent, NgbTabset, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesComponent } from '../skillTypes/skillTypes.component';
import { CandidateComponent } from '../candidate/candidate.component';


describe('ScreeningComponent', () => {
  let component: ScreeningConfigComponent;
  let fixture: ComponentFixture<ScreeningConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningConfigComponent, SkillTypeBucketsComponent, SkillTypesComponent, CandidateComponent],
      imports: [FormsModule, NgbModule],
      providers: [NgbTab, NgbTabContent, NgbTabset]
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
