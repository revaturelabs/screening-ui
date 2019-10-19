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
    const scheduledScreenings: ScheduledScreening[] = [];
    this.skillTypesService.getSkillTypes().subscribe(allSkillTypes => {
      this.httpClient.get<any[]>(this.urlService.screening.scheduleScreening()).subscribe(allScheduledScreenings => {
      for(const e of allScheduledScreenings){
        // console.log(e);
      }
        for (const e of allScheduledScreenings) {
          // console.log(e);
          // Each simpleTrainee get random skillType
          // Parse name into first and last name
          const nameArray = e.candidate.name.split(' ');
          let thisLastName = '';
          let thisFirstName = '';
          let i = 0;
          let commaFound = false;
          for (const n of nameArray) {
            if (n.charAt(n.length - 1) === ',') {
              commaFound = true;
              for (let j = 0; j <= i; j++) {
                // Add spaces between multiple lastnames
                thisLastName += nameArray[j] + ' ';
              }
              // Remove last space, and comma
              thisLastName = thisLastName.trim();
              thisLastName = thisLastName.substring(0, thisLastName.length - 1);
              for (let j = i + 1; j <= nameArray.length - 1; j++) {
                thisFirstName += nameArray[j] + ' ';
              }
              thisFirstName = thisFirstName.trim();
            }
            i++;
          }
          if (!commaFound) {
            thisFirstName = nameArray[0];
            for (i = 1; i < nameArray.length; i++) {
              thisLastName += nameArray[i] + ' ';
            }
            thisLastName = thisLastName.trim();
          }
          /*
          // If the record is stored with lastname first, save it backwards without the comma
          if (nameArray[0].charAt(nameArray[0].length-1) == ',') {
            thisLastName = nameArray[0].substring(0, nameArray[0].length-1);
            thisFirstName = nameArray[1];
          }
          // If there is no comma, the record was stored first name then last
          else {
            thisFirstName = nameArray[0];
            thisLastName = nameArray[1];
          }
          */
          console.log(allSkillTypes);
          let skillType: SkillType;
          for (const s of allSkillTypes) {
            if (e.skillTypeId > 6 && e.skillTypeId <= 12) {
              e.skillTypeId = e.skillTypeId - 6;
              console.log(e.skillTypeId);
            } else if (e.skillTypeId > 12) {
              e.skillTypeId = e.skillTypeId - 12;
              console.log(e.skillTypeId);
            }
            if (s.skillTypeId === e.skillTypeId + 50) {
              skillType = s;
            }
          }
          console.log(e);
          scheduledScreenings.push({
            scheduledScreeningId: e.scheduledScreeningId,
            trainee: {
              traineeID: e.candidate.traineeId,
              firstname: thisFirstName,
              lastname: thisLastName,
              skillTypeID: e.skillTypeId,
              skillTypeName: skillType.title,
              schedule: e.scheduledDate,
            },
            track: {
              skillTypeId: e.skillTypeId,
              title: skillType.title,
              isActive: true,
            },
            status: e.status,
            trainer: e.trainer,
            scheduledDate: e.scheduledDate,
          });
        }
      });
    });
    return of(scheduledScreenings);
  }
}
