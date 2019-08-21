import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ScheduledScreening } from '../../entities/ScheduledScreening';
import { SkillTypesService } from '../skill-types/skill-types.service';
import { SkillType } from '../../entities/SkillType';
import { UrlService } from '../urls/url.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Injectable()
export class ScheduledScreeningService {
  constructor(
    private httpClient: HttpClient,
    private skillTypesService: SkillTypesService,
    private urlService: UrlService
  ) { }

  private skillTypes: SkillType[] = [];
  private scheduledScreenings: ScheduledScreening[] = [];

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
  getScheduledScreenings(): ScheduledScreening[] {
    //const scheduledScreenings: ScheduledScreening[] = [];
    //this.skillTypesService.getSkillTypes().subscribe(allSkillTypes => {
      this.skillTypesService.getSkillTypes().subscribe( skillTypeData => {this.skillTypes = skillTypeData});
      this.httpClient.get<any[]>(this.urlService.screening.scheduledScreeningUrl()).subscribe( scheduledScreeningData => {
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
          console.log(s);
        }
      });
      
      return this.scheduledScreenings;
      //console.log(allScheduledScreenings);
        /*for (const e of allScheduledScreenings) {
          // Each simpleTrainee get random skillType
          // Parse name into first and last name
          const nameArray = e.trainee.name.split(' ');
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
          

          let skillType: SkillType;
          for (const s of allSkillTypes) {
            if (s.skillTypeId === e.skillTypeId) {
              skillType = s;
            }
          }
          scheduledScreenings.push(e);
        }*/
      //})
   // });
    //return of(scheduledScreenings);
  }
}
