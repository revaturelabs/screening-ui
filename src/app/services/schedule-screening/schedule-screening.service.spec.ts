import { TestBed, inject } from '@angular/core/testing';

import { ScheduleScreeningService } from './schedule-screening.service';
import { Dependencies } from 'src/app/caliber.test.module';

describe('ScheduleScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([ScheduleScreeningService], (service: ScheduleScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
