import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-average-bucket-type',
  templateUrl: './average-bucket-type.component.html',
  styleUrls: ['./average-bucket-type.component.css']
})
export class AverageBucketTypeComponent implements OnInit {

  Highcharts = HighCharts;
  options2: Object;
  @Input() barData2: object[] =  [{name: 'Java Applied', y: 92.7}, {name: 'Hibernate', y: 70.2},{name: 'SQL', y: 95.0},
  {name: 'Angular', y: 90.3},{name: 'Spring AoP', y: 60.0}, {name: 'Java Concepts', y: 82.6},{name: 'SOAP', y: 87.0}, 
  {name: 'JDBC', y: 87.0}, {name: 'REST', y: 87.0}];

  constructor() { 
    this.options2 = { 
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
      series: [{name: 'Bucket Type', colorByPoint: true, data: this.barData2, }]
    };
    
   }

  ngOnInit() {
  }

}
