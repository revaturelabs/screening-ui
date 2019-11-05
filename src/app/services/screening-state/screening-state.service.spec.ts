import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ScreeningStateService } from './screening-state.service';

describe('ScreeningStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ScreeningStateService]
    });
  });

  it('should be created', inject([ScreeningStateService], (service: ScreeningStateService) => {
    expect(service).toBeTruthy();
  }));
});
