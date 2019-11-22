import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ScheduledScreeningService } from './scheduled-screening.service';
import { UrlService } from '../urls/url.service';
import { TracksService } from '../tracks/tracks.service';

describe('ScheduleScreeningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ScheduledScreeningService, UrlService, TracksService]
    });
  });

  it('should be created', inject(
    [ScheduledScreeningService],
    (service: ScheduledScreeningService) => {
      expect(service).toBeTruthy();
    }
  ));
});
