import { ViolationType } from './ViolationType';

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
