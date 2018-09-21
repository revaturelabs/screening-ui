import { Question } from '../../entities/Question';


export const QUESTIONS: Question[] = [
    {
        questionId: 0,
        bucketId: -1,
        questionText: 'whuts yr favorite color',
        sampleAnswer1: 'answer1',
        sampleAnswer2: 'answer2',
        sampleAnswer3: 'answer3',
        sampleAnswer4: 'answer4',
        sampleAnswer5: 'answer5'
    },
    {
        questionId: 1,
        bucketId: -1,
        questionText: 'bleh',
        sampleAnswer1: 'bhahfha',
        sampleAnswer2: 'dsflkj',
        sampleAnswer3: 'eiei',
        sampleAnswer4: 'qq',
        sampleAnswer5: 'rew'
    },
    {
        questionId: 2,
        bucketId: -1,
        questionText: '000000',
        sampleAnswer1: 'asdf',
        sampleAnswer2: 'mnbb',
        sampleAnswer3: 'rewq',
        sampleAnswer4: 'hjkl',
        sampleAnswer5: 'poiu'
  },
  ];

export const replacementQuestion: Question = {
    questionId: 2,
    bucketId: 0,
    questionText: 'This is what the question should say after being replaced',
    sampleAnswer1: 'bubba',
    sampleAnswer2: 'buck',
    sampleAnswer3: 'scooter',
    sampleAnswer4: 'lou anne',
    sampleAnswer5: 'idk man'
};

export const expectedQuestion: Question = {
        questionId: 51,
        bucketId: -1,
        questionText: 'Re-contextualized foreground website',
        sampleAnswer1: 'Customizable bifurcated analyzer',
        sampleAnswer2: 'Ergonomic reciprocal complexity',
        sampleAnswer3: 'Universal user-facing moratorium',
        sampleAnswer4: '4',
        sampleAnswer5: '5'
};
