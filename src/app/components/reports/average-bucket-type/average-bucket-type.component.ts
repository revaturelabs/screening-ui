import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

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
  

  constructor() {  
  }

  ngOnInit() {
    this.setOptions(this._barData);
  }
  setOptions(data: object[]) {
    this._barData = data;
    this.options = { 
      title: { text: "Average Score By Bucket Type"},
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
      chart: { zoomType: 'x', type: 'column'},
      series: [{name: 'Bucket Type', colorByPoint: true, data: this._barData }]
    };
  }

}
