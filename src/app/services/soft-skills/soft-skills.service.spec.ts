import { TestBed, inject } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

import { SoftSkillsService } from "./soft-skills.service";

describe("SoftSkillsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],

      providers: [SoftSkillsService]
    });
  });

  it("should be created", inject(
    [SoftSkillsService],
    (service: SoftSkillsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
