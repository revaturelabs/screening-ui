import { TestBed, inject } from '@angular/core/testing';

import { ViolationTypeService } from './violationType.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('ViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViolationTypeService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([ViolationTypeService], (service: ViolationTypeService) => {
    expect(service).toBeTruthy();
  }));
});
