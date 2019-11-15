import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { UrlService } from "../urls/url.service";

import { TrackCategoryService } from "./track-category.service";

describe("TrackCategoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],

      providers: [TrackCategoryService, UrlService]
    });
  });

  it("should be created", inject(
    [TrackCategoryService],
    (service: TrackCategoryService) => {
      expect(service).toBeTruthy();
    }
  ));
});
