import { TestBed, inject } from '@angular/core/testing';
import { Bucket } from '../../entities/Bucket';
import { UrlService } from '../urls/url.service';
import { TracksService } from './tracks.service';
import {HttpClientModule} from '@angular/common/http';


describe('TracksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TracksService, UrlService, Bucket]
    });
  });

  it('should be created', inject([TracksService], (service: TracksService) => {
    expect(service).toBeTruthy();
  }));
});
