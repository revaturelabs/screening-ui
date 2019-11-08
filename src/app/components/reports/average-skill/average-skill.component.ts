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

  constructor() {}

  ngOnInit() {}

  setOptions(data: object[]) {
    this._barData = data;
    if (this._barData.length > 0) {
      this.options = {
        title: {
          text: 'Average Score By Skill Type',
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
        series: [
          { name: 'Skill Type', colorByPoint: true, data: this._barData }
        ]
      };
    } else {
      this.options = {
        title: {
          text: 'Average Score By Skill Type Graph is N/A',
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
        series: [
          { name: 'Skill Type', colorByPoint: true, data: this._barData }
        ]
      };
    }
  }
}
