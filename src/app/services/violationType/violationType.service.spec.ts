import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UrlService } from '../../services/urls/url.service';

import { ViolationTypeService } from './violationType.service';

describe('ViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [ViolationTypeService, UrlService],
    });
  });

  it('should be created', inject(
    [ViolationTypeService],
    (service: ViolationTypeService) => {
      expect(service).toBeTruthy();
    }
  ));
});
