import { SimpleTrainee } from './simpleTrainee';
import { SkillType } from './skillType';

/*
  Entity representing a screening scheduled to take place
  Specifies candidate, screener (as a CaliberTrainer object's ID, subject to change),
  technical track, completion status, and time.
*/
export interface ScheduledScreening {
  scheduledScreeningId: number;
  trainee: SimpleTrainee;
  track: SkillType;
  status: string;
  trainer: number;
  scheduledDate: Date;
}
