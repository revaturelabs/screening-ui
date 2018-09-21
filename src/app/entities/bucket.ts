import {Question} from './question';

/*
    Entity representing a bucket of questions corresponding to a certain skill
*/
export interface Bucket {
    bucketID: number;
    bucketCategory: string;
    bucketDescription: string;
    isActive: boolean;
    questions: Question[];
}
