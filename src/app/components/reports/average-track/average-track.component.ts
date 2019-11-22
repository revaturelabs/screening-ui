import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-average-track',
  templateUrl: './average-track.component.html',
  styleUrls: ['./average-track.component.css']
})
export class AverageTrackComponent implements OnInit {
  Highcharts = HighCharts;
  options: Object;
  _barData: object[] = [];

  @Input()
  set barData(barData: object[]) {
    this.setOptions(barData);
  }

  constructor() {}

  ngOnInit() {}

  setOptions(data: object[]) {
    this._barData = data;
    if (this._barData.length > 0) {
      this.options = {
        title: {
          text: 'Average Score By Track',
          y: 10,
          floating: false
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Average Score Values'
          }
        },
        legend: {
          enabled: false
        },
        chart: { zoomType: 'x', type: 'column' },
        series: [{ name: 'Track', colorByPoint: true, data: this._barData }]
      };
    } else {
      this.options = {
        title: {
          text: 'Average Score By Track Graph is N/A',
          y: 200,
          floating: true
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: false
        },
        chart: { zoomType: 'x', type: 'column' },
        series: [{ name: 'Track', colorByPoint: true, data: this._barData }]
      };
    }
  }
}
