import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';

/**
 * This class intercepts each HTTP request, clones it,
 * and adds criteria before actually performing the
 * AJAX request
 */
@Injectable()
export class SpringInterceptor implements HttpInterceptor {

  constructor() { }

  /**
  * Intercept each HTTP rquest and return a modified request
  */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      withCredentials: true,
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/*'
      }
    });

    return <any>next.handle(modifiedRequest)
      .pipe( catchError( error => {  // universal error handler
        /*
        Dumps the error to the console and returns an empty Observable
        as a fallback to allow a service call to continue as if no data
        was returned
        */
        if (error.status !== 200) {
        }
        // stub -> a generic user feedback hook can be placed here
        return new Observable(null);
      }));
  }
}
