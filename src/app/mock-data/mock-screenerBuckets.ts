import {ScreenerBucket} from '../entities/screenerBucket';
import {QuestionScore} from '../entities/questionScore';


export const SCREENERBUCKETS: ScreenerBucket[] = [
    {
        bucketName: 'OOP',
        questionScores: [
            {qSID: 1, questionId: 15, screeningID: 5555, score: 3, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 2, questionId: 13, screeningID: 5555, score: 5, commentary: 'Great!', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 3, questionId: 22, screeningID: 5555, score: 4, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 4, questionId: 31, screeningID: 5555, score: 4, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
        ]
    },
    {
        bucketName: 'Basic Java',
        questionScores: [
            {qSID: 5, questionId: 44, screeningID: 5555, score: 1, commentary: 'No idea', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 6, questionId: 45, screeningID: 5555, score: 2, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 7, questionId: 46, screeningID: 5555, score: 2, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 8, questionId: 47, screeningID: 5555, score: 1, commentary: 'I am lost', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 9, questionId: 50, screeningID: 5555, score: 2, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
        ]
    },
    {
        bucketName: 'Advanced Java',
        questionScores: [
            {qSID: 10, questionId: 63, screeningID: 5555, score: 5, commentary: 'Incredible!', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 11, questionId: 69, screeningID: 5555, score: 4, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 12, questionId: 58, screeningID: 5555, score: 4, commentary: 'I am still lost', beginTime: new Date(2018, 2, 22, 13)},
        ]
    },
    {
        bucketName: 'SQL',
        questionScores: [
            {qSID: 13, questionId: 77, screeningID: 5555, score: 5, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
            {qSID: 14, questionId: 78, screeningID: 5555, score: 3, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
        ]
    },
    {
        bucketName: 'Web',
        questionScores: [
            {qSID: 15, questionId: 83, screeningID: 5555, score: 2, commentary: '', beginTime: new Date(2018, 2, 22, 13)},
        ]
    },

];

