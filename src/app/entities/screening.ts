import { Tag } from './tag';
import { SimpleTrainee } from './simpleTrainee';
import { CaliberTrainer } from './caliberTrainer';
import { SkillType } from './skillType';

/*
  Entity representing all data related to the screening of a candidate
*/
export interface Screening {
  screeningID: number;
  traineeID: number;
  screenerID: number;
  skillTypeID: number;
  compositeScore: number;
  aboutMeCommentary: string;
  generalCommentary: string;
  softSkillCommentary: string;
  startDateTime: Date;
  endDateTime: Date;
  softSkillsVerdict: boolean;
  status: string;
}
