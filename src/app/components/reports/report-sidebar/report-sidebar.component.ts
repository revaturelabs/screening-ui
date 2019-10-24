import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Options, ChangeContext, PointerType } from 'ng5-slider';
import { ReportService } from '../../../services/reports/report.service';
import { ReportData } from '../../../entities/ReportData';
import { Screening } from '../../../entities/Screening';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-report-sidebar',
  templateUrl: './report-sidebar.component.html',
  styleUrls: ['./report-sidebar.component.css']
})
export class ReportSidebarComponent implements OnInit {

  screenerEmails$: Observable<Screening>;
  screenerEmail = new Array<Screening>();
  screenerName = [];
  private searchTerms = new Subject<string>();
  emailSearchTerm: string = '';
  //sliderControl: FormControl;
  _reportData: ReportData;
  @Input('reportData') reportData:ReportData
  // set reportData(reportData: ReportData){
  //   this._reportData = reportData;
  // }
  // Used to emit slider events to master-component
  @Output() sliderChange = new EventEmitter();
  constructor(
    private reportService: ReportService,
    private modalService: NgbModal
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
   //if (term === '')
     // this.searchChange.emit('');
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'fixed-modal' });
  }

  /*onClickScreenerEmail(screener) {
    //console.log(`clicked on ${screener}`);
    this.emailSearchTerm = screener;
    this.searchTerms.next('');
    this.searchChange.emit(screener);
  }*/
  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }

  ngOnInit() {
    //console.log(this.reportService.getAllScreeners());
    //alert(this.reportService.getAllScreeners());
    // TODO: Change to reportCache
    // this.screenerEmails$ = of(EMAILS);
    //this.sliderControl = new FormControl(this.initialSliderValue);
     this.reportService.getAllScreeners().subscribe(response => {
      console.log(response); } /*
     this.screenerEmail = response.map(item => {
    return new Screening(
            item.screeningId,
            item.scheduledScreening.candidate.name,
            item.scheduledScreening.scheduledStatus,
            item.scheduledScreening.skillTypeId,
            item.scheduledScreening.scheduledDate
      );
    });*/
    )

   /* for (let i = 0; i < this.screenerEmail.length; i++){
          this.screenerEmail[i].name;
          this.searchTerms.pipe(
            switchMap((name: any) => this.screenerEmail[i].name)
          )
          console.log(this.screenerEmail[i].name);
        }
  } */
}

      // this.screenerEmail$ = this.searchTerms.pipe(
      
        // debounceTime(300),
        // distinctUntilChanged(),
        // switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
        // switchMap((name: any) => this.screenerEmail[].name)
      // );
     // console.log( this.screenerEmail[0].scheduledScreening.candidate.name);
    // })
    
        //this.screenerName = data.scheduledScreening.candidate.name;
      
    /*this.screenerEmails$ = this.searchTerms.pipe(
      
      debounceTime(300),
      distinctUntilChanged(),
      // switchMap((partialEmail: string) => this.reportService.getScreenersByPartialEmail(partialEmail))
      switchMap((partialEmail: any) => this.reportService.getAllScreeners())
    
    ); */
    
    
  // 
}