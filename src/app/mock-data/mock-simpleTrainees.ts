import { SimpleTrainee } from '../entities/simpleTrainee';

const tempDate: Date = new Date();
export const TRAINEES: SimpleTrainee[] = [
    {
        traineeID: 1,
        firstname: 'Jimmy',
        lastname: 'John',
        skillTypeID: 52,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 9)
    },
    {
        traineeID: 2,
        firstname: 'Isabella',
        lastname: 'Dougherty',
        skillTypeID: 52,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 11)
    },
    {
        traineeID: 3,
        firstname: 'Clarissa',
        lastname: 'Gonzales',
        skillTypeID: 53,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 13)
    },
    {
        traineeID: 5,
        firstname: 'Catherine',
        lastname: 'Mahzareh',
        skillTypeID: 52,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 14)
    },
    {
        traineeID: 6,
        firstname: 'Pietro',
        lastname: 'Vietre',
        skillTypeID: 56,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 16)
    },
    {
        traineeID: 7,
        firstname: 'John',
        lastname: 'Doe',
        skillTypeID: 55,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 7)
    },
    {
        traineeID: 8,
        firstname: 'Lana',
        lastname: 'Yea',
        skillTypeID: 55,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 8)
    },
    {
        traineeID: 9,
        firstname: 'Kevin',
        lastname: 'Brainer',
        skillTypeID: 54,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 9)
    },
    {
        traineeID: 10,
        firstname: 'Lucy',
        lastname: 'Sgod',
        skillTypeID: 56,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 11)
    },
    {
        traineeID: 11,
        firstname: 'Luis',
        lastname: 'Lana',
        skillTypeID: 54,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 13)
    },
    {
        traineeID: 12,
        firstname: 'Michael',
        lastname: 'Nevermore',
        skillTypeID: 56,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 15)
    },
    {
        traineeID: 13,
        firstname: 'Chad',
        lastname: 'Aldritch',
        skillTypeID: 51,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0 , 22, 16)
    },

];

function randomDate(): Date {
    const temp: Date = new Date();
    const numberOfDaysToAdd: number = Math.random();
    temp.setDate(temp.getDate() + numberOfDaysToAdd);
    return temp;
}
