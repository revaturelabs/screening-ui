import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import * as HighCharts from "highcharts";
import { AverageTrackComponent } from "./average-track.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HighchartsChartModule } from "highcharts-angular";

describe("AverageTrackComponent", () => {
  let component: AverageTrackComponent;
  let fixture: ComponentFixture<AverageTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HighchartsChartModule],
      declarations: [AverageTrackComponent]
    });
    fixture = TestBed.createComponent(AverageTrackComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
