import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { SkillTypesService } from '../skill-types/skill-types.service';
import { SkillType } from '../../entities/SkillType';
import { UrlService } from '../urls/url.service';

@Injectable()
export class ScheduledScreeningService {
  constructor(
    private httpClient: HttpClient,
    private skillTypesService: SkillTypesService,
    private urlService: UrlService
  ) {}

  private skillTypes: SkillType[] = [];
  private scheduledScreenings: ScheduledScreening[] = [];

  getScheduledScreenings(): ScheduledScreening[] {
    this.skillTypesService.getSkillTypes().subscribe(skillTypeData => {
      this.skillTypes = skillTypeData;
      this.httpClient
        .get<any[]>(this.urlService.screening.scheduledScreeningUrl())
        .subscribe(scheduledScreeningData => {
          for (const scheduledScreening of scheduledScreeningData) {
            let s: ScheduledScreening = new ScheduledScreening();
            s.scheduledScreeningId = scheduledScreening.scheduledScreeningId;
            s.scheduledStatus = scheduledScreening.scheduledStatus;
            s.scheduledDate = scheduledScreening.scheduledDate;
            s.candidate = scheduledScreening.candidate;
            for (const skillType of this.skillTypes) {
              if (skillType.skillTypeId === scheduledScreening.skillTypeId) {
                s.track = skillType;
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
