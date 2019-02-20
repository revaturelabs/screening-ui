import { Component, OnInit, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-average-skill',
  templateUrl: './average-skill.component.html',
  styleUrls: ['./average-skill.component.css']
})
export class AverageSkillComponent implements OnInit {

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
    
  }

  setOptions(data: object[]) {
    this._barData = data;
    this.options = { 
      title: { text: "Average Score By Skill Type"},
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
      series: [{name: 'Skill Type', colorByPoint: true, data: this._barData }]
    };
  }


}
