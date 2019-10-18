import { TestBed, inject } from '@angular/core/testing';

import { RouteService } from './route.service';
import { Dependencies } from 'src/app/caliber.test.module';

describe('RouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(Dependencies);
  });

  it('should be created', inject([RouteService], (service: RouteService) => {
    expect(service).toBeTruthy();
  }));
});
