import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Screening } from '../../entities/Screening';
import { ScheduledScreening } from '../../entities/ScheduleScreening';
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

  // When the screening begins, the following information will be sent,
  // and a screening ID will be returned as an observable.
  // scheduledScreening - the screening object selected from the screening list
  // beginTime - the start time of the screening
  // trainerId - ID of the trainer conducting the screening
  // skillTypeId - the ID of the track

  beginScreening(
    scheduledScreening: ScheduledScreening
    // beginTime: Date,
    // trainerId: number,
    // skillTypeId: number,
  ): Observable<any> {
    return this.httpClient.post<any>(
        this.urlService.screening.startScreening(),
        {
          // 'scheduledScreening': scheduledScreening.scheduledScreeningId,
          // 'beginTime': beginTime,
          // 'trainerId': trainerId,
          // 'skillTypeId': skillTypeId
          scheduledScreening
        },
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
    this.sendscreen = JSON.parse(localStorage.getItem('screening'));
    this.httpClient.post(this.urlService.screening.endScreening(),
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
    return this.httpClient.get<Screening>(
      this.urlService.screening.getScreening(id)
    );
  }

  // Helper method that converts an input string to a boolean
  convertToBoolean(input: string): boolean | undefined {
    try {
      return JSON.parse(input);
    } catch (e) {
      return undefined;
    }
  }
  createScreening(screening: Screening): void {
   // screening.generalCommentary = this.generalCommentary;
    this.httpClient.post<any>(this.urlService.screening.startScreening(),
        {
          'status': 'In Progress',
          // 'softSkillVerdict': 0,
          // 'screenerId': 0,
           'aboutMeCommentary': JSON.parse(localStorage.getItem('screening')).aboutMeCommentary,
          // 'generalCommentary': '',
          // 'softSkillCommentary': '',
           'startDateTime': new Date(),
          // 'endDateTime': '',
           'screeningId': localStorage.getItem('screeningID'),
           'scheduledScreening': JSON.parse(localStorage.getItem('scheduledScreening')),
          // 'compositeScore': 0
       //   screening
        }
      ).subscribe();
  }

  // updateScreening(id: number): Observable<any> {
  // const screen = this.getScreeningById(id);
  //   return this.httpClient.put<any>(this.urlService.screening.updateScreening(),
  //   {
  //     screen
  //   },
  //   { headers: this.headers }
  //   );
  // }

  // updateScreening(id: number) {
  //   this.getScreeningById(id).subscribe(
  //     curscreening => {
  //       console.log('am i ever here');
  //       console.log(curscreening);
  //       return this.httpClient.put(this.urlService.screening.updateScreening(), curscreening).subscribe();
  //     }
  //   );
  // }

  updateScreening(currentScreen: Screening) {
    return this.httpClient.post(this.urlService.screening.updateScreening(), {currentScreen},
    { headers: this.headers });
  }

  // Submit comments related to the candidate's self-introduction
  // From the IntroductionComponent
  // comment - the screener's comment

  // Submits general comments related to the candidate's overall performance
  // through the Q&A portion.
}
