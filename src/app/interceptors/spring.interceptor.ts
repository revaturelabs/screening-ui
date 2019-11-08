import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AmplifyService } from 'aws-amplify-angular';
/**
 * This class intercepts each HTTP request, clones it,
 * and adds criteria before actually performing the
 * AJAX request
 */
@Injectable()
export class SpringInterceptor implements HttpInterceptor {
  constructor(private amplifyService: AmplifyService) {}

  /**
   * Intercept each HTTP rquest and return a modified request
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user'));
    let groups;
    if (user) {
      groups =
        user['signInUserSession']['idToken']['payload']['cognito:groups'];
      console.log(user);
    }
    const modifiedRequest = request.clone({
      // withCredentials: true,
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/*',
        Tokens: JSON.stringify(user.signInUserSession.idToken.jwtToken),
        Role: JSON.stringify(groups),
      },
    });

    return <any>next.handle(modifiedRequest).pipe(
      catchError(error => {
        // universal error handler
        /*
        Dumps the error to the console and returns an empty Observable
        as a fallback to allow a service call to continue as if no data
        was returned
        */
        if (error.status !== 200) {
          console.log('!!DETECTED XHR REQUEST ERRROR!!');
          console.log(error);
        }
        // stub -> a generic user feedback hook can be placed here
        return new Observable(null);
      })
    );
  }
}
