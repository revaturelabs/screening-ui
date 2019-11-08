import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Screening } from "../../entities/Screening";
import { ScheduledScreening } from "../../entities/ScheduledScreening";
import { UrlService } from "../urls/url.service";

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
  constructor(private httpClient: HttpClient, private urlService: UrlService) {}

  // Need to change to match the backend
  headers = new HttpHeaders({
    "Content-type": "application/json"
  });

  public softSkillsResult: string;
  public generalComments: string;
  public screeningID$: Observable<Screening>;
  compositeScore: number;
  finalSoftSkillComment: string;

  // When the screening begins, the following information will be sent,
  // and a screening ID will be returned as an observable.
  // scheduledScreening - the screening object selected from the screening list
  // beginTime - the start time of the screening
  // trainerId - ID of the trainer conducting the screening
  // skillTypeId - the ID of the track
  beginScreening(
    scheduledScreening: ScheduledScreening,
    startDateTime: Date,
    screenerId: number
  ): Observable<Number> {
    let screening: Screening = new Screening();
    screening.scheduledScreening = scheduledScreening;
    screening.startDateTime = startDateTime;
    screening.screenerId = screenerId;
    return this.httpClient.post<Number>(
      this.urlService.screening.screeningUrl(),
      screening,
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
    if (this.softSkillsResult === "Pass") {
      verdict = 1;
    } else if (this.softSkillsResult === "Fail") {
      verdict = 0;
    }
    this.httpClient
      .post(this.urlService.screening.screeningUrlById(this.screeningID$), {
        status: "Completed",
        softSkillVerdict: verdict,
        softSkillCommentary: this.finalSoftSkillComment,
        endDateTime: new Date(),
        screeningId: localStorage.getItem("screeningID"),
        scheduledScreeningId: localStorage.getItem("scheduledScreeningID"),
        compositeScore: this.compositeScore
      })
      .subscribe();
  }

  getScreeningById(id) {
    return this.httpClient.get<Screening>(
      this.urlService.screening.screeningUrlById(id)
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
  createScreening() {
    this.httpClient.post(this.urlService.screening.screeningUrl(), {
      status: "In Progress",
      softSkillVerdict: 0,
      screenerId: 0,
      aboutComments: "",
      generalComments: "",
      softSkillCommentary: "",
      startDate: new Date(),
      endDateTime: "",
      screeningId: localStorage.getItem("screeningID"),
      scheduledScreeningId: localStorage.getItem("scheduledScreeningID"),
      compositeScore: 0
    });
  }
  updateScreening(id: number) {
    this.getScreeningById(id).subscribe(screening =>
      this.httpClient.post(
        this.urlService.screening.screeningUrlById(id),
        screening
      )
    );
  }
  // Submit comments related to the candidate's self-introduction
  // From the IntroductionComponent
  // comment - the screener's comment

  // Submits general comments related to the candidate's overall performance
  // through the Q&A portion.
}
