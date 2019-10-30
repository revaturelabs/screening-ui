import { Screening } from './Screening';

export class QuestionScore {
  questionScoreID: number;
  questionId: number;
  categoryId: number;
  screening: Screening;
  score: number;
  comment: string;
  beginTime: Date;
}
