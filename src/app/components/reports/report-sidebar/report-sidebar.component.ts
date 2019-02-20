import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms'
import { Options, ChangeContext, PointerType } from 'ng5-slider';

import { ReportService } from 'src/app/services/reports/report.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EMAILS } from 'src/app/mock-data/mock-emails';
import { WeekDay } from '@angular/common';
import { ReportData } from 'src/app/entities/ReportData';


@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
  @Input() initialSliderValue: number = 1;
  screenerEmails$: Observable<string[]>;
  private searchTerms = new Subject<string>();
  emailSearchTerm: string = '';
  sliderControl: FormControl;
  _reportData: ReportData;
  @Input()
  set reportData(reportData: ReportData){
    this._reportData = reportData;
  }
  // Used to emit slider events to master-component
  @Output() sliderChange = new EventEmitter();
  // Used to emit searchbar changes to master-component
  @Output() searchChange = new EventEmitter();

  sliderOptions: Options = {
    floor: 1,
    ceil: 6,
    showTicks: true,
    translate: (value: number): string => {
      switch(value){
        case 1:
          return "1 Week";
        case 2:
          return "2 Weeks";
        case 3:
          return "3 Weeks";
        case 4:
          return "1 Month";
        case 5:
          return "1/2 Year";
        case 6:
          return "1 Year";
      }
    },
  };

  constructor(
    private reportService: ReportService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
    if (term === '')
      this.searchChange.emit('');
  }

  onClickScreenerEmail(screener) {
    console.log(`clicked on ${screener}`);
    this.emailSearchTerm = screener;
    this.searchTerms.next('');
    this.searchChange.emit(screener);
  }
  onSliderChange(changeContext: ChangeContext): void {
    // console.log(`onUserChangeStart(${this.getChangeContextString(changeContext)})\n`);
    let actualWeeks = changeContext.value;
    switch(actualWeeks) {
      case 5: actualWeeks = 26; break;
      case 6: actualWeeks = 52; break;
    }
    this.sliderChange.emit(actualWeeks);
  }
  
  // onUserChange(changeContext: ChangeContext): void {
  //   this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  // }

  // onUserChangeEnd(changeContext: ChangeContext): void {
  //   console.log(`onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`);
  // }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }

  ngOnInit() {
    // TODO: Change to reportCache
    // this.screenerEmails$ = of(EMAILS);
    this.sliderControl = new FormControl(this.initialSliderValue);
    this.screenerEmails$ = this.searchTerms.pipe(
      
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
    );
  }

}
