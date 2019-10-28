import { Candidate } from './Candidate';
import { ScheduledStatus } from './ScheduledStatus';

//new
export class ScheduledScreening {
  scheduledScreeningId: number;
  candidate: Candidate;
  scheduledStatus: ScheduledStatus;//
  skillTypeId: number;
  scheduledDate: Date;
}

