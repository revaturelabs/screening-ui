import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ScheduledScreening } from '../../entities/ScheduleScreening';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { SkillType } from '../../entities/SkillType';
import { UrlService } from '../urls/url.service';

@Injectable()
export class ScheduleScreeningService {
  constructor(
    private httpClient: HttpClient,
    private skillTypesService: SkillTypesService,
    private urlService: UrlService
  ) { }

  /**
   * Returns an observable array of all scheduled screenings for the Candidate Screening List component
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
   * i.e. '/screening-service/screening/scheduledScreenings' to 'screening-service/screening/scheduledScreenings'
   */

  getScheduleScreenings(): Observable<ScheduledScreening[]> {
    return  this.httpClient.get<ScheduledScreening[]>(this.urlService.screening.scheduleScreening());
  }
}
