import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ViolationType } from '../../entities/ViolationType';

/**
Used to obtain the defined types of soft skill violations.
Each time a screener flags a violation,
they have the option to choose from a list of violation types.
This is the service to obtain the types from the server in the form of an observable
*/
@Injectable()
export class SoftSkillsService {
  constructor(private http: HttpClient) {}

  public sampleViolationTypes: ViolationType[];

  public violationTypeList$: Observable<ViolationType[]>;

  // Saves only the ViolationType IDs in an array
  public checkedViolationIDList: number[];
}
