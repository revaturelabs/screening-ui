import { TestBed, inject } from '@angular/core/testing';

import { GambitBatchUtilService } from './gambit-batch-util.service';

describe('GambitBatchUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GambitBatchUtilService]
    });
  });

  it('should be created', inject([GambitBatchUtilService], (service: GambitBatchUtilService) => {
    expect(service).toBeTruthy();
  }));
});
