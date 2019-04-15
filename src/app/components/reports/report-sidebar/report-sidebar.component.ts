import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms'
import { Options, ChangeContext, PointerType } from 'ng5-slider';

import { ReportService } from 'src/app/services/reports/report.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { WeekDay } from '@angular/common';
import { ReportData } from 'src/app/entities/ReportData';


@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
  //@Input() initialSliderValue: number = 1;
  minSliderValue: number = 0;
  maxSliderValue: number = 208;
  screenerEmails$: Observable<string[]>;
  private searchTerms = new Subject<string>();
  emailSearchTerm: string = '';
  //sliderControl: FormControl;
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
    floor: 0,
    ceil: 208,
    //showTicks: true,
    translate: (value: number): string => {
      if(value === 0) {
        return "Present Day";
      }
      else if (value === 1) {
        return "1 Week";
      }
      if(value === 52) {
        return "1 Year";
      }
      else if(value > 52 && value < 104) {
        let weeks = value-52;
        if(weeks === 1) {
          return `1 Year ${weeks} Week`;
        }
        else {
          return `1 Year ${weeks} Weeks`;
        }
      }
      else if(value === 104) {
        return "2 Years";
      }
      else if(value > 104 && value < 156) {
        let weeks = value-104;
        if(weeks === 1) {
          return `2 Years ${weeks} Week`;
        }
        else {
          return `2 Years ${weeks} Weeks`;
        }
      }
      else if(value === 156) {
        return "3 Years";
      }
      else if(value > 156 && value < 208) {
        let weeks = value-156;
        if(weeks === 1) {
          return `3 Years ${weeks} Week`;
        }
        else {
          return `3 Years ${weeks} Weeks`;
        }
      }
      else if(value === 208) {
        return "4 Years";
      }
      else {
        return `${value} Weeks`;
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
    //console.log(`clicked on ${screener}`);
    this.emailSearchTerm = screener;
    this.searchTerms.next('');
    this.searchChange.emit(screener);
  }
  onSliderChange(changeContext: ChangeContext): void {
    // console.log(`onUserChangeStart(${this.getChangeContextString(changeContext)})\n`);
    let actualWeeksMinValue = changeContext.value;
    let actualWeeksMaxValue = changeContext.highValue;
    let weeksArray = [actualWeeksMinValue, actualWeeksMaxValue]
    /*switch(actualWeeks) {
      case 5: actualWeeks = 26; break;
      case 6: actualWeeks = 52; break;
    }*/
    this.sliderChange.emit(weeksArray);
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
    //this.sliderControl = new FormControl(this.initialSliderValue);
    this.screenerEmails$ = this.searchTerms.pipe(
      
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
    );
  }

}
