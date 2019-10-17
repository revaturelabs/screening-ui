import { async, TestBed, inject } from '@angular/core/testing';

import { ViolationTypeService } from './violationType.service';
import { Dependencies } from 'src/app/caliber.test.module';

beforeEach(async(() => {
  TestBed.configureTestingModule(Dependencies)
  .compileComponents();
}));

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
