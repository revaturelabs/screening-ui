import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSkillComponent } from './average-skill.component';

describe('AverageSkillComponent', () => {
  let component: AverageSkillComponent;
  let fixture: ComponentFixture<AverageSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
