import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms'
import { Options, ChangeContext, PointerType } from 'ng5-slider';

import { ReportService } from 'src/app/services/reports/report.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EMAILS } from 'src/app/mock-data/mock-emails';
import { WeekDay } from '@angular/common';


@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
  screenerEmails$: Observable<string[]>;
  private searchTerms = new Subject<string>();
  emailSearchTerm: string = '';
  sliderControl: FormControl = new FormControl(4);
  @Output() sliderChange = new EventEmitter();

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
    this.sliderControl.registerOnChange(this.onSliderChange);
  }

  onClickScreenerEmail(screener) {
    console.log(screener);
    this.emailSearchTerm = screener;
    this.searchTerms.next('');
  }
  onSliderChange(changeContext: ChangeContext): void {
    console.log(`onUserChangeStart(${this.getChangeContextString(changeContext)})\n`);
    this.sliderChange.emit(changeContext.value);
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
    this.screenerEmails$ = this.searchTerms.pipe(
      
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
    );
  }

}
