
/*
  Entity representing all data related to the screening of a candidate
*/
export class Screening {
  screeningId: number;
  traineeID: number;
  screenerId: number;
  skillType: number;
  compositeScore: number;
  aboutMeCommentary: string;
  generalCommentary: string;
  softSkillCommentary: string;
  startDateTime: Date;
  endDateTime: Date;
  softSkillsVerdict: boolean;
  status: string;
  scheduledScreeningId: number;
}
