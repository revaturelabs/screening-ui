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
   this.options = {
     title: { text: "Violations By Types"},
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
}