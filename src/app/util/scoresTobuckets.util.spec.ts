import { ScoresToBucketsUtil } from './scoresToBuckets.util';
import { QuestionScore } from '../entities/QuestionScore';
import { QuestionsService} from '../services/questions/questions.service';
import { Weight } from '../entities/Weight';


describe('ScoresToBuckets', () => {
    it('create an instance', () => {
        const ScoretoBucket = new ScoresToBucketsUtil();
        expect(ScoretoBucket).toBeTruthy;
    });
    
    it('getFinalBreakdown should return null', () => {
        const bucket = new ScoresToBucketsUtil();
        expect(bucket.getFinalBreakdown).toBeNull;
    });

    it('', () => {
        const bucket = new ScoresToBucketsUtil();
        var date = new Date('1995-12-17T03:24:00');
        // let score: QuestionScore = {qSID:1,questionId:2,screeningID:1,score:30,commentary:' ',bucketId:1,
        // beginTime:date};
        let score: QuestionScore[] = [];
        let weight: Weight[] = [];
        expect(bucket.getFinalBreakdown(score, weight)).toBeNull;
        
    });
})