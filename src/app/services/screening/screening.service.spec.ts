import { TestBed, inject } from '@angular/core/testing';

import { ScreeningService } from './screening.service';

describe('ScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreeningService]
    });
  });

  it('should be created', inject([ScreeningService], (service: ScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
