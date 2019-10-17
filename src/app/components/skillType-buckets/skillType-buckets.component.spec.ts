import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { Dependencies } from 'src/app/caliber.test.module';

describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
