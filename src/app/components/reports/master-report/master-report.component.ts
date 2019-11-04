import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { SimpleReportModel } from 'src/app/entities/SimpleReportModel';
import { FullReportService } from 'src/app/services/reports/full-report.service';

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
  //compositeScores: number[] = [];
  scatterPlotResults: any[] = [];
  simpleReportModel: SimpleReportModel


  constructor(public simpleReportService: SimpleReportService, public fullReportService: FullReportService) { }

  ngOnInit() {
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
      console.log(data);

      //this.simpleReportModel = JSON.parse(data);
      //console.log(this.simpleReportModel);
      this.buildScatterPlot(data);
      console.log(this.scatterPlotResults);


      //console.log(moment('2018-03-03T05:00:00.000+0000').format('YYYY-MM-DD'));




    });

    this.simpleReportService.getAllSimpleReportsByDate('2018-03-03','2018-03-05').subscribe((data) => {
      console.log(data);
    });

    this.fullReportService.getFullReportsByScreeningId('4321').subscribe((data) => {
      console.log(data);
    });


    //scatter
    this.scatterChart = new Chart('Scatter', {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: this.scatterPlotResults
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time:{
              unit: 'day'
            },
            position: 'bottom'
          }]
        }
      }
    });
  }

  buildScatterPlot(dataModel: SimpleReportModel) {
    let len: number = Object.keys(dataModel).length;
    for (let i = 0; i < len; i++) {
      
      length = this.scatterPlotResults.push({'x': moment(dataModel[i].screenDate).format('YYYY-MM-DD'), 'y': dataModel[i].compositeScore});
      
    }
    
  }

}
