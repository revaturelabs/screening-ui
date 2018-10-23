import { SimpleTrainee } from './SimpleTrainee';
import { SkillType } from './SkillType';

/*
  Entity representing a screening scheduled to take place
  Specifies candidate, screener (as a CaliberTrainer object's ID, subject to change),
  technical track, completion status, and time.
*/
export interface ScheduledScreening {
  scheduledScreeningId: number;
  candidate: SimpleTrainee;
  scheduledStatus: string;
  skillTypeId: number;
  scheduledDate: Date;
}
