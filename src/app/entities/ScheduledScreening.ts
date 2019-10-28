import { Candidate } from './Candidate';
import { Track } from './Track';

export class ScheduledScreening {
  scheduledScreeningId: number;
  candidate: Candidate;
  track: Track;
  scheduledStatus: string;
  scheduledDate: Date;
}
