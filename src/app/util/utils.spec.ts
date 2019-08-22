import { stringifyDate } from './utils';

describe('utils', () => {
    // this is the only method that's actually used in this service
    it('stringifyDate converts dates successfully, when they\'re passed in as string arrays',
        () => {
            // create a class to store dates a string arrays
        class DateAsStringArray {
            year: string;
            month: string;
            day: string;
        }

        const sampleDate: DateAsStringArray = {
            year: '1979',
            month: '03',
            day: '12',
        };

        expect(stringifyDate(sampleDate)).toContain('1979-03-12T00:00:00.0');
    });

    // this is the only method that's actually used in this service
    it('stringifyDate converts dates successfully, when they\'re stored in a Date object', () => {
        const dateString = '1968-11-16T00:00:00';
        const newDate = new Date(dateString);

        expect(stringifyDate(newDate)).toContain(dateString);
      });
});
