import { Candidate } from "./Candidate";
import { SkillType } from "./SkillType";

export class ScheduledScreening {
  scheduledScreeningId: number;
  candidate: Candidate;
  track: SkillType;
  scheduledStatus: string;
  scheduledDate: Date;
}
