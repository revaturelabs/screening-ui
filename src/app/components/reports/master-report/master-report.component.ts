import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { SimpleReportModel } from 'src/app/entities/SimpleReportModel';

@Component({
  selector: 'app-master-report',
  templateUrl: './master-report.component.html',
  styleUrls: ['./master-report.component.css']
})
export class MasterReportComponent implements OnInit {
  title = 'ScreenForce Simple Report';
  LineChart = [];
  BarChart = [];
  PieChart = [];
  scatterChart = [];
  dataSize: number;
  //compositeScores: number[] = [];
  scatterPlotResults: any[] = [];
  chartColors: any[] = [];
  simpleReportModel: SimpleReportModel


  constructor(public simpleReportService: SimpleReportService) { }

  ngOnInit() {
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
      
      this.simpleReportModel = data;
      this.dataSize = Object.keys(data).length;
      console.log("dataSize: " + this.dataSize);
      this.getRandomColor(this.dataSize);
      console.log(this.chartColors);
      this.buildScatterPlot(this.simpleReportModel);
      console.log(this.scatterPlotResults);
      
    });


    //scatter
    this.scatterChart = new Chart('Scatter', {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: this.scatterPlotResults,
          pointBackgroundColor: this.chartColors,
          pointBorderColor:this.chartColors,
          radius: 10
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            },
            position: 'bottom'
          }]
        }
      }
    });
  }

  buildScatterPlot(dataModel: SimpleReportModel) {
    
    for (let i = 0; i < this.dataSize; i++) {

      length = this.scatterPlotResults.push({ 'x': moment(dataModel[i].screenDate).format('YYYY-MM-DD'), 'y': dataModel[i].compositeScore });

    }

  }

  //Color Generation functionality
  getRandomColor(size) {
    let threshold = 20000;
    //let result = new Array(size);
    let letters = '0123456789ABCDEF'.split('');
    let red = 'FF';
    let green = 'FF';
    let blue = 'FF';
    
    for (var i = 0; i < size;) {
      let color = '#';
      let r = letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)];
      let g = letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)];
      let b = letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)];
      let notWhite = (255 - parseInt('0x' + r)) * (255 - parseInt('0x' + r)) + (255 - parseInt('0x' + g)) * (255 - parseInt('0x' + g))
        + (255 - parseInt('0x' + b)) * (255 - parseInt('0x' + b)) > threshold;
      let notSameasPre = (parseInt('0x' + red) - parseInt('0x' + r)) * (parseInt('0x' + red) - parseInt('0x' + r))
        + (parseInt('0x' + green) - parseInt('0x' + g)) * (parseInt('0x' + green) - parseInt('0x' + g))
        + (parseInt('0x' + blue) - parseInt('0x' + b)) * (parseInt('0x' + blue) - parseInt('0x' + b)) > threshold;
      if (notWhite && notSameasPre) {
        this.chartColors[i] = '#' + r + g + b;
        i++;
        red = r;
        green = g;
        blue = b;
      }
      
    }
    
  }

}
