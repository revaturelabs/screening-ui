import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ViolationType } from "../../entities/ViolationType";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../urls/url.service";

/**
 * Service that contains methods related to ViolationType entities
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 *
 * removed UrlUtilService and replaced with UrlService for better
 * formatted endpoints
 */

@Injectable()
export class ViolationTypeService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  /** Get an array of all violation types, returning it as an observable */
  getViolationTypes(): Observable<ViolationType[]> {
    return this.http.get<ViolationType[]>(
      this.urlService.softSkillsViolation.getViolationTypeURL(),
      {}
    );
  }

  /** Get an array of all violation types. Differs from the previous because it returns
  an Observable<any[]> */
  getAllViolationTypes(): Observable<any[]> {
    return this.http.get<any[]>(
      this.urlService.softSkillsViolation.getViolationTypeURL(),
      {}
    );
  }
}
