import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AlertsService } from '../alert-service/alerts.service';
import { ApiService } from './api.service';
import { defer } from 'rxjs';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

describe('ApiService', () => {
    let httpClientSpyOnGet: { get: jasmine.Spy };
    let httpClientSpyOnPost: { post: jasmine.Spy };
    let httpClientSpyOnPut: { put: jasmine.Spy };
    let httpClientSpyOnDelete: { delete: jasmine.Spy };
    let apiService: ApiService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        providers: [
          ApiService,
          HttpClient,
          AlertsService
        ]
      });
    });

    it('should be created', inject([ApiService], (service: ApiService) => {
        expect(service).toBeTruthy();
    }));

    // this is the only method that's actually used in this service
    it('stringifyDate converts dates successfully, when they\'re passed in as string arrays', inject([ApiService],
        (service: ApiService) => {
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

        expect(service.stringifyDate(sampleDate)).toContain('1979-03-12T00:00:00.0');
    }));

    it('testing if block for stringifyDate', inject([ApiService], (service: ApiService) => {
        const dateString = '1968-11-16T00:00:00';

        expect(service.stringifyDate(['1968-11-16'])).toContain(dateString);
      }));

    it('doGet should call HttpClient.get, and return the passed-in string', () => {
        httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
        apiService = new ApiService(<any> httpClientSpyOnGet);

        const expectedString: String = 'expected string';

        httpClientSpyOnGet.get.and.returnValue(asyncData(expectedString));

        apiService.doGet(``).subscribe(
          questions => expect(questions).toEqual(expectedString),
          fail
        );

        expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
    });

    
    it('doPost should call HttpClient.post, and return the passed-in string', () => {
        httpClientSpyOnPost = jasmine.createSpyObj('http', ['post']);
        apiService = new ApiService(<any> httpClientSpyOnPost);

        const expectedString: String = 'expected string';

        httpClientSpyOnPost.post.and.returnValue(asyncData(expectedString));

        apiService.doPost(expectedString, `whatever string, doesn't matter`).subscribe(
          questions => expect(questions).toEqual(expectedString),
          fail
        );

        expect(httpClientSpyOnPost.post.calls.count()).toBe(1, 'one call');
    });

    it('doPut should call HttpClient.put, and return the passed-in string', () => {
        httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
        apiService = new ApiService(<any> httpClientSpyOnPut);

        const expectedString: String = 'expected string';

        httpClientSpyOnPut.put.and.returnValue(asyncData(expectedString));

        apiService.doPut(expectedString, `whatever string, doesn't matter`).subscribe(
          questions => expect(questions).toEqual(expectedString),
          fail
        );

        expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
    });

    
    it('doDelete should call HttpClient.delete, and return the passed-in string', () => {
        httpClientSpyOnDelete = jasmine.createSpyObj('http', ['delete']);
        apiService = new ApiService(<any> httpClientSpyOnDelete);

        const expectedString: String = 'expected string';

        httpClientSpyOnDelete.delete.and.returnValue(asyncData(expectedString));

        apiService.doDelete(`whatever string, doesn't matter`).subscribe(
          questions => expect(questions).toEqual(expectedString),
          fail
        );

        expect(httpClientSpyOnDelete.delete.calls.count()).toBe(1, 'one call');
    });
});

