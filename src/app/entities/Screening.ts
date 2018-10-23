
/*
  Entity representing all data related to the screening of a candidate
*/
export interface Screening {
  screeningId: number;
  traineeId: number;
  screenerId: number;
  skillTypeId: number;
  compositeScore: number;
  aboutMeCommentary: string;
  generalCommentary: string;
  softSkillCommentary: string;
  startDateTime: Date;
  endDateTime: Date;
  softSkillsVerdict: boolean;
  status: string;
}
