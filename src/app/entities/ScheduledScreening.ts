import { Candidate } from './Candidate';
import { Track } from './Track';
import { ScheduledStatus } from './ScheduledStatus';

export class ScheduledScreening {
  scheduledScreeningId: number;
  candidate: Candidate;
  track: Track;
  // scheduledStatus: string;
  scheduledDate: Date;

  // new
  scheduledStatus: ScheduledStatus;
  TrackId: number;
}
