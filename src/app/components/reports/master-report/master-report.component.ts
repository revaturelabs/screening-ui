import { Component, OnInit } from "@angular/core";
import { ReportService } from "src/app/services/reports/report.service";
import { ReportData } from "src/app/entities/ReportData";
import { ReportCacheService } from "src/app/services/reports/report-cache.service";
import { SimpleReportService } from "src/app/services/reports/simple-report.service";
import { Chart } from "chart.js";
import * as moment from "moment";
import { SimpleReportModel } from "src/app/entities/SimpleReportModel";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { ReportVisualComponent } from "../report-visual/report-visual.component";
import { FullReportService } from "src/app/services/reports/full-report.service";

@Component({
  selector: "app-master-report",
  templateUrl: "./master-report.component.html",
  styleUrls: ["./master-report.component.css"]
})
export class MasterReportComponent implements OnInit {
  title = "ScreenForce Simple Report";
  LineChart = [];
  BarChart = [];
  PieChart = [];
  searched = false;
  dataSize: number;
  scatterChart: Chart;
  scatterPlotResults: any[] = [];

  clickedFullReport: any;
  date1: Date = null;
  date2: Date = null;
  catalog = new Map();
  colors: string[] = [];

  simpleReportModel: SimpleReportModel;

  constructor(
    public simpleReportService: SimpleReportService,
    public fullReportService: FullReportService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAll();
  }
  //search functions for ngif search dates in title
  didSearch() {
    this.searched = true;
  }
  clearSearch() {
    this.searched = false;
  }
  //generates all simple reports
  getAll() {
    this.simpleReportService.getAllSimpleReports().subscribe(data => {
      this.dataSize = Object.keys(data).length;
      for (let i = 0; i < this.dataSize; i++) {
        if (!this.catalog.has(data[i].track.title)) {
          this.catalog.set(data[i].track.title, this.getRandomColor(1));
        }
        this.colors.push(this.catalog.get(data[i].track.title));
      }

      this.getRandomColor(this.dataSize);

      this.buildScatterPlot(data);
      this.clickedFullReport = data;
    });
  }

  //Color Generation functionality
  getRandomColor(size) {
    const threshold = 20000;
    const result = new Array(size);
    const letters = "0123456789ABCDEF".split("");
    let red = "FF";
    let green = "FF";
    let blue = "FF";
    for (let i = 0; i < 1; ) {
      const r =
        letters[Math.floor(Math.random() * 16)] +
        letters[Math.floor(Math.random() * 16)];
      const g =
        letters[Math.floor(Math.random() * 16)] +
        letters[Math.floor(Math.random() * 16)];
      const b =
        letters[Math.floor(Math.random() * 16)] +
        letters[Math.floor(Math.random() * 16)];
      const notWhite =
        (255 - parseInt("0x" + r)) * (255 - parseInt("0x" + r)) +
          (255 - parseInt("0x" + g)) * (255 - parseInt("0x" + g)) +
          (255 - parseInt("0x" + b)) * (255 - parseInt("0x" + b)) >
        threshold;
      if (notWhite) {
        result[i] = "#" + r + g + b;
        i++;
        red = r;
        green = g;
        blue = b;
      }
      for (let i = 1; i < size; ) {
        const r =
          letters[Math.floor(Math.random() * 16)] +
          letters[Math.floor(Math.random() * 16)];
        const g =
          letters[Math.floor(Math.random() * 16)] +
          letters[Math.floor(Math.random() * 16)];
        const b =
          letters[Math.floor(Math.random() * 16)] +
          letters[Math.floor(Math.random() * 16)];
        const notWhite =
          (255 - parseInt("0x" + r)) * (255 - parseInt("0x" + r)) +
            (255 - parseInt("0x" + g)) * (255 - parseInt("0x" + g)) +
            (255 - parseInt("0x" + b)) * (255 - parseInt("0x" + b)) >
          threshold;
        const notSameasPre =
          (parseInt("0x" + red) - parseInt("0x" + r)) *
            (parseInt("0x" + red) - parseInt("0x" + r)) +
            (parseInt("0x" + green) - parseInt("0x" + g)) *
              (parseInt("0x" + green) - parseInt("0x" + g)) +
            (parseInt("0x" + blue) - parseInt("0x" + b)) *
              (parseInt("0x" + blue) - parseInt("0x" + b)) >
          threshold;
        if (notWhite && notSameasPre) {
          result[i] = "#" + r + g + b;
          i++;
          red = r;
          green = g;
          blue = b;
        }
      }
    }

    return result;
  }
  //formats and returns reports by date
  datelog() {
    let newdate = moment(this.date1).format("YYYY-MM-DD");
    let newdate2 = moment(this.date2).format("YYYY-MM-DD");

    this.bydate(newdate, newdate2);
  }
  bydate(date1, date2) {
    this.scatterPlotResults = [];
    this.simpleReportService
      .getAllSimpleReportsByDate(date1, date2)
      .subscribe(data => {
        this.colors = [];
        this.dataSize = Object.keys(data).length;
        for (let i = 0; i < this.dataSize; i++) {
          if (!this.catalog.has(data[i].track.title)) {
            this.catalog.set(data[i].track.title, this.getRandomColor(1));
          }
          this.colors.push(this.catalog.get(data[i].track.title));
        }

        this.getRandomColor(this.dataSize);

        this.buildScatterPlot(data);
      });
  }

  buildScatterPlot(dataModel: SimpleReportModel) {
    this.scatterPlotResults = [];
    let len: number = Object.keys(dataModel).length;

    for (let i = 0; i < len; i++) {
      length = this.scatterPlotResults.push({
        x: moment(dataModel[i].screenDate).format("YYYY-MM-DD"),
        y: dataModel[i].compositeScore
      });
    }

    if (this.scatterChart != null) {
      this.scatterChart.reset();
    }

    //scatter
    this.scatterChart = new Chart("Scatter", {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "",
            data: this.scatterPlotResults,
            pointBackgroundColor: this.colors,
            pointBorderColor: this.colors,
            radius: 10,
            pointRadius: 10
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        /*
         *event listener
         *reports the data source array position
         *sends array position (elementIndex) to report
         */
        onClick: (evt, activeElements) => {
          var elementIndex = activeElements[0]._index;
          this.report(elementIndex);
        },

        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day"
              },
              position: "bottom"
            }
          ]
        }
      }
    });
  }
  /*
   *accepts an index of the data array
   *pulls the screeningId from data (clickedFullReport)
   *use fullReportService to get the full report by screeningId
   * loads full report to temp
   * sets dialogConfigs
   * opens dialog with ReportVisualComponent and the configs
   */
  report(point: any) {
    this.fullReportService
      .getFullReportsByScreeningId(this.clickedFullReport[point].screeningId)
      .subscribe(data => {
        let temp = JSON.parse(JSON.stringify(data));
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = temp;

        this.dialog.open(ReportVisualComponent, dialogConfig);
      });
    this.scatterChart.update();
  }
}
