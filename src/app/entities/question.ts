import {Bucket} from './bucket';

/*
    DB entity representing a question corresponding to a particular skill (bucket)
*/
export interface Question {
    questionId: number;
    questionText: string;
    sampleAnswer1: string;
    sampleAnswer2: string;
    sampleAnswer3: string;
    sampleAnswer4: string;
    sampleAnswer5: string;
    isActive: boolean;
    bucketId: number;
}
