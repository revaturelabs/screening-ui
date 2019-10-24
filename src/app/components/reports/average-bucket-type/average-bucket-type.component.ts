import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ReportService } from '../../../services/reports/report.service';

@Component({
  selector: 'app-average-bucket-type',
  templateUrl: './average-bucket-type.component.html',
  styleUrls: ['./average-bucket-type.component.css']
})
export class AverageBucketTypeComponent implements OnInit {

  Highcharts = HighCharts;
  options: Object;
  _barData: object[] = [];

  @Input()
  set barData(barData: object[]) {
    this.setOptions(barData);
  }


  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.setOptions(this._barData);
  }
  setOptions(data: object[]) {
    this._barData = data;
    if (this._barData.length > 0) {
      this.options = {
        title: {
          text: 'Average Score By Screener',
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
        chart: { zoomType: 'x', type: 'line' },
        series: [{ name: 'Category', colorByPoint: true, data: this._barData }]
      };
    } else {
      this.options = {
        title: {
          text: 'Average Score By Category is N/A',
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
        chart: { zoomType: 'x', type: 'line' },
        series: [{ name: 'Category', colorByPoint: true, data: this._barData }]
      };
    }
  }
}
