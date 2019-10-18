import { SimpleTrainee } from '../entities/SimpleTrainee';

const tempDate: Date = new Date();
export const TRAINEES: SimpleTrainee[] = [
    {
        traineeID: 1,
        firstname: 'Jimmy',
        lastname: 'John',
        skillTypeId: 2,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 9)
    },
    {
        traineeID: 2,
        firstname: 'Isabella',
        lastname: 'Dougherty',
        skillTypeId: 2,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 11)
    },
    {
        traineeID: 3,
        firstname: 'Clarissa',
        lastname: 'Gonzales',
        skillTypeId: 3,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 13)
    },
    {
        traineeID: 5,
        firstname: 'Catherine',
        lastname: 'Mahzareh',
        skillTypeId: 2,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 14)
    },
    {
        traineeID: 6,
        firstname: 'Pietro',
        lastname: 'Vietre',
        skillTypeId: 6,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 21, 16)
    },
    {
        traineeID: 7,
        firstname: 'John',
        lastname: 'Doe',
        skillTypeId: 5,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 7)
    },
    {
        traineeID: 8,
        firstname: 'Lana',
        lastname: 'Yea',
        skillTypeId: 5,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 8)
    },
    {
        traineeID: 9,
        firstname: 'Kevin',
        lastname: 'Brainer',
        skillTypeId: 4,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 9)
    },
    {
        traineeID: 10,
        firstname: 'Lucy',
        lastname: 'Sgod',
        skillTypeId: 6,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 11)
    },
    {
        traineeID: 11,
        firstname: 'Luis',
        lastname: 'Lana',
        skillTypeId: 4,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 13)
    },
    {
        traineeID: 12,
        firstname: 'Michael',
        lastname: 'Nevermore',
        skillTypeId: 6,
        skillTypeName: 'Java',
        schedule: new Date(2018, 0, 22, 15)
    },
    {
        traineeID: 13,
        firstname: 'Chad',
        lastname: 'Aldritch',
        skillTypeId: 1,
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
