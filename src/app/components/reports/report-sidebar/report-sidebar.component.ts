import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms'
import { Options, ChangeContext, PointerType } from 'ng5-slider';

import { ReportService } from 'src/app/services/reports/report.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { WeekDay } from '@angular/common';
import { ReportData } from 'src/app/entities/ReportData';

import {map, startWith} from 'rxjs/operators';
import { Screening } from 'src/app/entities/Screening.model';


@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.scss']
})
export class ReportSidebarComponent implements OnInit {
 
  // screenerEmails$: Observable<string[]>;
  screenerEmails$: Observable<Screening>;
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
      // switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
      switchMap((partialEmail: any) => this.reportService.getAllScreeners())
   
    );

    
  }

}
