import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-violations-by-type',
  templateUrl: './violations-by-type.component.html',
  styleUrls: ['./violations-by-type.component.css'],
})
export class ViolationsByTypeComponent implements OnInit {
  Highcharts = HighCharts;
  options: Object;
  @Input('barData') barData: object[];
  set data(barData: object[]) {
    this.setOptions(barData);
  }

  constructor() {}

  ngOnInit() {
    this.setOptions(this.data);
  }

  setOptions(barData: object[]) {
    barData = this.data;
    if (this.barData.length > 0) {
      this.options = {
        title: {
          text: 'Violations By Types',
          y: 10,
          floating: false,
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          title: {
            text: 'Number of Violations',
          },
        },
        legend: {
          enabled: false,
        },
        chart: { zoomType: 'x', type: 'column' },
        series: [
          { name: 'Violation Type', colorByPoint: true, data: this.barData },
        ],
      };
    } else {
      this.options = {
        title: {
          text: 'Violations By Types Graph is N/A',
          y: 200,
          floating: true,
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          title: {
            text: '',
          },
        },
        legend: {
          enabled: false,
        },
        chart: { zoomType: 'x', type: 'column' },
        series: [
          { name: 'Violation Type', colorByPoint: true, data: this.barData },
        ],
      };
    }
  }
}
