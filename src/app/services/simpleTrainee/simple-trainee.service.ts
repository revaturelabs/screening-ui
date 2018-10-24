import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SimpleTrainee } from '../../entities/SimpleTrainee';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { UrlService } from '../urls/url.service';

/*

*/

/**
 * Used to obtain the collection of
 * candidates waiting to be screened,
 * set the candidate being screened,
 * and get the candidate being screened
 *
 * Modified from made endpoints more consistent with
 * the rest of the application.
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 */

@Injectable()
export class SimpleTraineeService {

  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService,
    private skillTypesService: SkillTypesService,
  ) {}

  private selectedCandidate: SimpleTrainee;

  // Set the current selected candidate to the candidate input
  setSelectedCandidate(candidate: SimpleTrainee): void {
    this.selectedCandidate = candidate;
  }

  // Return the current selected candidate
  getSelectedCandidate(): SimpleTrainee {
    if(this.selectedCandidate){
      return this.selectedCandidate;
    }
    else {
      let s: SimpleTrainee = {
        traineeID: 0,
        firstname: " ",
        lastname: " ",
        skillTypeID: 0,
        skillTypeName: " ",
        schedule: null,
      }
      return s;
    }
  }

}
