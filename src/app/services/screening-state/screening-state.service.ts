import { Injectable } from '@angular/core';
import { ScheduledScreening } from 'src/app/entities/ScheduledScreening';

/**
 * Passes information about the current selected screening to screening components.
 */
@Injectable()
export class ScreeningStateService {

  private currentScreening: ScheduledScreening;

  setCurrentScreening(scheduledScreening: ScheduledScreening): void {
    this.currentScreening = scheduledScreening;
  }

  getCurrentScreening(): ScheduledScreening {
    return this.currentScreening;
  }

  getTrackID(): number {
    return this.currentScreening.track.trackId;
  }

}
