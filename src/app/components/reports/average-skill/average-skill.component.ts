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
  @Input() barData: object[] =  [{name: 'Soft Skills', y: 80.7}, {name: 'Tech Skills', y: 75.2},{name: 'Time Hacking Skills', y: 60.0},
  {name: 'Basic Math Skils', y: 90.0},{name: 'Advance Math Skills', y: 84.5}, {name: 'Beta Skills', y: 87.0}];
  constructor() {
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
      series: [{name: 'Skill Type', colorByPoint: true, data: this.barData, }]
    };
    
   }

  ngOnInit() {
  }


}
