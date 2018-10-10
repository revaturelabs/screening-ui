import { Candidate } from './Candidate';
import { SkillType } from './SkillType';

/*
  Entity representing a screening scheduled to take place
  Specifies candidate, screener (as a CaliberTrainer object's ID, subject to change),
  technical track, completion status, and time.
*/
export interface ScheduledScreening {
  scheduledScreeningId: number;
  candidate: Candidate;
  track: SkillType;
  status: string;
  trainer: number;
  scheduledDate: Date;
}
