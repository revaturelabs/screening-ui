import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';
import { ReportData } from 'src/app/entities/ReportData';
import { ReportCacheService } from 'src/app/services/reports/report-cache.service';
import { SimpleReportService } from 'src/app/services/reports/simple-report.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { SimpleReportModel } from 'src/app/entities/SimpleReportModel';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ReportVisualComponent } from '../report-visual/report-visual.component';
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
  dataSize: number;
  //compositeScores: number[] = [];
  scatterPlotResults: any[] = [];
  chartColors: any[] = [];
  simpleReportModel: SimpleReportModel


  constructor(public simpleReportService: SimpleReportService, public fullReportService: FullReportService,private dialog: MatDialog) { }

  ngOnInit() {
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
      
      this.simpleReportModel = data;
      this.dataSize = Object.keys(data).length;
      console.log("dataSize: " + this.dataSize);
      this.getRandomColor(this.dataSize);
      console.log(this.chartColors);
      this.buildScatterPlot(this.simpleReportModel);
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
  report() {
    //this.dialog.open(AReportComponent);
    this.fullReportService.getFullReportsByScreeningId("4321").subscribe((data) => {
      let temp= JSON.parse(JSON.stringify(data));
      console.log(temp);
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";

      dialogConfig.data=temp;
      console.log(dialogConfig.data);

      this.dialog.open(ReportVisualComponent, dialogConfig);
    }
    )
  }
}
