import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Screening } from '../../entities/Screening';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { UrlService } from '../urls/url.service';

/**
 * A service that contains all functions used for overall screening management
 * and comment submission.
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 *
 * removed forward slash at the start of the screening-service
 * i.e. '/avengers' to 'avengers'
 */
@Injectable()
export class ScreeningService {
  screen: ScheduledScreening;
  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) {
    this.screen = this.screen;
    this.sendscreen = new Screening();
  }

  // Need to change to match the backend
  headers = new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  public softSkillsResult: string;
  public generalCommentary: string;
  public screeningID$: Observable<Screening>;
  public sendscreen: Screening;
  compositeScore: number;
  finalSoftSkillComment: string;

  beginScreening(
    scheduledScreening: ScheduledScreening,
    startDateTime: Date,
    screenerId: number,
  ): Observable<Number> {
    let screening: Screening = new Screening();
    screening.scheduledScreening = scheduledScreening;
    screening.startDateTime = startDateTime;
    screening.screenerId = screenerId;
    return this.httpClient
      .post<Number>(
        this.urlService.screening.screeningUrl(), screening,
        { headers: this.headers }
      );
  }

  // Getter method for the screeningID$ observable
  getScreeningID() {
    return this.screeningID$;
  }

  // When the screening ends, send the appropriate information via POST request.
  // softSkillComment - the screener's final comments on the candidate's soft skills.
  endScreening(softSkillComment: string): void {
    let verdict;
    if (this.softSkillsResult === 'Pass') {
      verdict = true;
    } else if (this.softSkillsResult === 'Fail') {
      verdict = false;
    }
    this.httpClient.post(this.urlService.screening.screeningUrlById(this.screeningID$),
      {
        'status': 'Completed',
        'softSkillsVerdict': verdict,
       // 'aboutMeCommentary': verdict,
        'generalCommentary': JSON.parse(localStorage.getItem('screening')).generalCommentary,
        'aboutMeCommentary': JSON.parse(localStorage.getItem('screening')).aboutMeCommentary,
        'softSkillCommentary': JSON.parse(localStorage.getItem('screening')).softSkillCommentary,
        'startDateTime': JSON.parse(localStorage.getItem('screening')).startDateTime,
        'endDateTime': new Date(),
        'screeningId': localStorage.getItem('screeningID'),
        'scheduledScreening':  JSON.parse(localStorage.getItem('scheduledScreening')),
        'compositeScore': this.compositeScore
        //  sendscreen: JSON.parse(localStorage.getItem('screening'))
      }
    ).subscribe();
  }

  getScreeningById(id) {
    return this.httpClient.get<Screening>(this.urlService.screening.screeningUrlById(id));
  }

  // Helper method that converts an input string to a boolean
  convertToBoolean(input: string): boolean | undefined {
    try {
      return JSON.parse(input);
    } catch (e) {
      return undefined;
    }
  }
  createScreening() {
    this.httpClient.post(this.urlService.screening.screeningUrl(),
      {
        'status': 'In Progress',
        'softSkillVerdict': 0,
        'screenerId': 0,
        'aboutComments': '',
        'generalComments': '',
        'softSkillCommentary': '',
        'startDate': new Date(),
        'endDateTime': '',
        'screeningId': localStorage.getItem('screeningID'),
        'scheduledScreeningId': localStorage.getItem('scheduledScreeningID'),
        'compositeScore': 0
      }
    );
  }
  updateScreening(id: number) {
    this.getScreeningById(id).subscribe(
      screening => this.httpClient.post(this.urlService.screening.screeningUrlById(id), screening)
    );
  }
}
