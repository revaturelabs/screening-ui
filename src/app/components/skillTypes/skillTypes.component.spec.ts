import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillTypesComponent } from './skillTypes.component';
import { Dependencies } from '../../screenforce.test.module';

describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypesComponent;
  let fixture: ComponentFixture<SkillTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should grab all skill types', () => {
    expect(component.grabAllSkillTypes).toBeTruthy();
  });
});
