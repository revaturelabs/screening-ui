import { TestBed, inject } from '@angular/core/testing';

import { ViolationTypeService } from './violationType.service';

describe('ViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViolationTypeService]
    });
  });

  it('should be created', inject([ViolationTypeService], (service: ViolationTypeService) => {
    expect(service).toBeTruthy();
  }));
});
