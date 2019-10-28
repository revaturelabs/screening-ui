import { Bucket } from "./Bucket";



export class Question {
    questionId: number;
    bucket: Bucket;
    isActive: boolean;
    questionText: string;
    sampleAnswer: string;    
}

