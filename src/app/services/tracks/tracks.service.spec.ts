import { TestBed, inject } from '@angular/core/testing';
import { Category } from '../../entities/Category';
import { UrlService } from '../urls/url.service';
import { TracksService } from './tracks.service';
import {HttpClientModule} from '@angular/common/http';


describe('TracksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TracksService, UrlService, Category]
    });
  });

  it('should be created', inject([TracksService], (service: TracksService) => {
    expect(service).toBeTruthy();
  }));
});
