import {QuestionScore} from './QuestionScore';

/*
    Entity representing questions answered by a candidate during a screeening
*/
export interface ScreenerBucket {
    bucketName: string;
    questionScores: QuestionScore[];
}
