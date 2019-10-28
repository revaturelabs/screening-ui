import { Screening } from "./Screening";

export class QuestionScore {
  questionScoreId: number;
  questionId: number;
  bucketId: number;
  screening: Screening; //
  score: number;
  comment: string;
  beginTime: Date;
}

