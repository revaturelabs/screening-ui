import { TestBed, inject } from '@angular/core/testing';

import { RouteService } from './route.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';

describe('RouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteService],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([RouteService], (service: RouteService) => {
    expect(service).toBeTruthy();
  }));
});
