import {QuestionScore} from './questionScore';

/*
    Entity representing questions answered by a candidate during a screeening
*/
export interface ScreenerBucket {
    bucketName: string;
    questionScores: QuestionScore[];
}
