import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as HighCharts from 'highcharts';
import { AverageSkillComponent } from './average-skill.component';
import { RouterTestingModule } from '@angular/router/testing';
import * as Highcharts from 'highcharts';
describe('AverageSkillComponent', () => {
  let component: AverageSkillComponent;
  let fixture: ComponentFixture<AverageSkillComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations:[AverageSkillComponent],
      providers:[]
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
