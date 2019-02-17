import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ReportService } from 'src/app/services/reports/report.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.css']
})
export class ReportSidebarComponent implements OnInit {
  screenerEmails$: Observable<string[]>;
  private searchTerms = new Subject<string>();


  constructor(
    private reportService: ReportService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    // TODO: Change to reportCache
    this.screenerEmails$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
    );
  }

}
