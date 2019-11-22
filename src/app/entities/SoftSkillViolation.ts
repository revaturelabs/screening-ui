import { ViolationType } from './ViolationType';
import { Screening } from './Screening';

/*
    Entity representing an occurrence of a soft skill violation during a screening
*/
export interface SoftSkillViolation {
  violationID: number;
  screeningID: number;
  violationType: ViolationType;
  Time: Date;
  Comment: string;
}

//new
export class SoftSkillViolation {
  softSkillViolationID: number;
  screening: Screening;
  violationType: ViolationType;
  Comment: string;
  Time: Date;
}
