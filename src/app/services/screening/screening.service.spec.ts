import { TestBed, inject } from '@angular/core/testing';

import { ScreeningService } from './screening.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../urls/url.service';

describe('ScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScreeningService, HttpClient, HttpHandler, UrlService]
    });
  });

  it('should be created', inject([ScreeningService], (service: ScreeningService) => {
    expect(service).toBeTruthy();
  }));
});
