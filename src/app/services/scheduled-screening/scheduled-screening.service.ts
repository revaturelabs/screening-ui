import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ScheduledScreening } from "../../entities/ScheduledScreening";
import { TracksService } from "../tracks/tracks.service";
import { Track } from "../../entities/Track";
import { UrlService } from "../urls/url.service";

@Injectable()
export class ScheduledScreeningService {
  constructor(
    private httpClient: HttpClient,
    private tracksService: TracksService,
    private urlService: UrlService
  ) {}

  private tracks: Track[] = [];
  private scheduledScreenings: ScheduledScreening[] = [];

  getScheduledScreenings(): ScheduledScreening[] {
    this.tracksService.getTracks().subscribe(trackData => {
      this.tracks = trackData;
      this.httpClient
        .get<any[]>(this.urlService.screening.scheduledScreeningUrl())
        .subscribe(scheduledScreeningData => {
          for (const scheduledScreening of scheduledScreeningData) {
            let s: ScheduledScreening = new ScheduledScreening();
            s.scheduledScreeningId = scheduledScreening.scheduledScreeningId;
            s.scheduledStatus = scheduledScreening.scheduledStatus;
            s.scheduledDate = scheduledScreening.scheduledDate;
            s.candidate = scheduledScreening.candidate;
            for (const track of this.tracks) {
              if (track.trackId === scheduledScreening.trackId) {
                s.track = track;
                break;
              }
            }
            this.scheduledScreenings.push(s);
          }
        });
    });
    return this.scheduledScreenings;
  }
}
