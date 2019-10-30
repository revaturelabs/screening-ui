import { Candidate } from './Candidate';
import { SkillType } from './SkillType';
import { ScheduledStatus } from './ScheduledStatus';

export class ScheduledScreening {
  scheduledScreeningId: number;
  candidate: Candidate;
  scheduledStatus: ScheduledStatus;
  TrackId: number;
  scheduledDate: Date;
}
