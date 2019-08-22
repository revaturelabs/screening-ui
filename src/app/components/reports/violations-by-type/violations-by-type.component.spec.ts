import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationsByTypeComponent } from './violations-by-type.component';
import { HighchartsChartModule } from 'highcharts-angular';

describe('ViolationsByTypeComponent', () => {
  let component: ViolationsByTypeComponent;
  let fixture: ComponentFixture<ViolationsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HighchartsChartModule],
      declarations: [ ViolationsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationsByTypeComponent);
    component = fixture.debugElement.componentInstance;
    component.barData = new Array();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
