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
  dataSize: number;
  scatterChart = [];
  chartColors: any[] = [];
  //compositeScores: number[] = [];
  scatterPlotResults: any[] = [];
  date1:Date;
  date2:Date;
  simpleReportModel: SimpleReportModel


  constructor(public simpleReportService: SimpleReportService, public fullReportService: FullReportService,private dialog: MatDialog) { }

  ngOnInit() {
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
      console.log(data);
      this.dataSize = Object.keys(data).length;
      console.log("dataSize: " + this.dataSize);
      this.getRandomColor(this.dataSize);
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
datelog(){
  let newdate = moment(this.date1).format('YYYY-MM-DD');
  let newdate2 = moment(this.date2).format('YYYY-MM-DD');
  console.log(newdate);
console.log(newdate2);
this.bydate(newdate,newdate2);

}
bydate(date1,date2){
  this.scatterPlotResults = [];
  this.simpleReportService.getAllSimpleReportsByDate(date1,date2).subscribe((data) => {
    console.log(data);
    this.buildScatterPlot(data);
  });

 };
  buildScatterPlot(dataModel: SimpleReportModel) {
    let len: number = Object.keys(dataModel).length;
    for (let i = 0; i < len; i++) {

      length = this.scatterPlotResults.push({ 'x': moment(dataModel[i].screenDate).format('YYYY-MM-DD'), 'y': dataModel[i].compositeScore });

    }
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
    events: ['click'],
    /*onClick: function(evt, activeElements) {
      var elementIndex = activeElements[0]._index;
      console.log(elementIndex);
      //this.data.datasets[0].pointBackgroundColor[elementIndex] = 'white';
      //this.update();
    },*/

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

  report() {
    //this.dialog.open(AReportComponent);
    this.simpleReportService.getAllSimpleReports().subscribe((data) => {
      let temp= JSON.parse(JSON.stringify(data));
      console.log(temp[0]);
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";

      dialogConfig.data=temp[0];
      console.log(dialogConfig.data);

      this.dialog.open(ReportVisualComponent, dialogConfig);
    }
    )
  }
}
