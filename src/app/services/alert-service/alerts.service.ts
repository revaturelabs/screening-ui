import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertsService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          this.keepAfterNavigationChange = false;
        } else {
          this.subject.next();
        }
      }
    });
  }

  /**
   * push message type and message content into subject to broadcaast
   * @param message success message
   */
  success(message: string) {
    this.subject.next({ type: 'success', text: message });
  }
  onSuccess(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  /**
 * push message type and message content into subject to broadcaast
 * @param message success message
 */
  error(message: string) {
    this.subject.next({ type: 'error', text: message });
  }
  onError(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  /**
   * return subject as observable for subscribers
   */
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
