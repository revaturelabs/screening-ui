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
        for (const e of allScheduledScreenings) {
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

          let skillType: SkillType;
          for (const s of allSkillTypes) {
            if (s.skillTypeId === e.skillTypeId) {
              skillType = s;
            }
          }
          if(!skillType)skillType=allSkillTypes[2];
          scheduledScreenings.push({
            scheduledScreeningId: e.scheduledScreeningId,
            candidate: {
             
              traineeID:0,
              firstname: thisFirstName,
              lastname: thisLastName,
              skillTypeID: skillType.skillTypeId,
              skillTypeName: skillType.title,
              schedule: e.scheduledDate,
            },
            
            skillTypeId: skillType.skillTypeId,
            scheduledStatus: e.scheduledStatus,
            scheduledDate: e.scheduledDate,
          });
        }
      });
    });
    return of(scheduledScreenings);
  }
}
