import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
 selector: 'app-violations-by-type',
 templateUrl: './violations-by-type.component.html',
 styleUrls: ['./violations-by-type.component.css']
})
export class ViolationsByTypeComponent implements OnInit {

 Highcharts = HighCharts;
 options: Object;
 _barData: object[];
 @Input()
 set barData(barData: object[]) {
   this.setOptions(barData);
 }

 constructor() {
  }

 ngOnInit() {
 }
 
 setOptions(barData: object[]) {
   this._barData = barData;
   if(this._barData.length > 0) {
    this.options = {
      title: { 
        text: "Violations By Types",
        y: 10,
        floating: false
      },
      xAxis: {
        type: 'category'
    },
    yAxis: {
      title: {
          text: 'Number of Violations'
      }
    },
      legend: {
        enabled: false
    },
      chart: { zoomType: 'x', type: 'column'},
      series: [{name: 'Violation Type', colorByPoint: true, data: this._barData }]
    };
   }
   else {
    this.options = {
      title: { 
        text: "Violations By Types Graph is N/A",
        y: 200,
        floating: true
      },
      xAxis: {
        type: 'category',
    },
    yAxis: {
      title: {
          text: ''
      }
    },
      legend: {
        enabled: false
    },
      chart: { zoomType: 'x', type: 'column'},
      series: [{name: 'Violation Type', colorByPoint: true, data: this._barData }]
    };
   }
 }
}