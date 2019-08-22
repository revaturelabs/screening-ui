import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSkillComponent } from './average-skill.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HighchartsChartModule } from 'highcharts-angular';

describe('AverageSkillComponent', () => {
  let component: AverageSkillComponent;
  let fixture: ComponentFixture<AverageSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule, HighchartsChartModule],
      declarations: [ AverageSkillComponent ],

    })
    fixture = TestBed.createComponent(AverageSkillComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
