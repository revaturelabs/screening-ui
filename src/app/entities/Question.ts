import { Bucket } from './Bucket';

export class Question {
    questionId: number;
    questionText: string;
    sampleAnswer1: string;
    sampleAnswer2: string;
    sampleAnswer3: string;
    sampleAnswer4: string;
    sampleAnswer5: string;
    isActive: boolean;
    bucket: Bucket;
}
