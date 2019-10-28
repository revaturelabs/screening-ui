import { TestBed, inject } from '@angular/core/testing';
import { ScreeningService } from './screening.service';
import { Dependencies } from '../../screenforce.test.module';

describe('ScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([ScreeningService], (service: ScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
