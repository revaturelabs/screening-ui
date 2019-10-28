import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UrlService } from '../../services/urls/url.service';

import { TrackBucketService } from './track-bucket.service';

describe('TrackBucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , HttpClientModule ],

      providers: [TrackBucketService, UrlService]
    });
  });

  it('should be created', inject([TrackBucketService], (service: TrackBucketService) => {
    expect(service).toBeTruthy();
  }));
});

