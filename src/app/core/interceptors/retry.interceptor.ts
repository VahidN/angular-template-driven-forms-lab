import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, delay, mergeMap, retryWhen, take } from "rxjs/operators";

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  private delayBetweenRetriesMs = 1000;
  private numberOfRetries = 3;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retryWhen(errors => errors.pipe(
        mergeMap((error: HttpErrorResponse, retryAttempt: number) => {
          if (retryAttempt === this.numberOfRetries - 1) {
            console.log(`HTTP call '${request.method} ${request.url}' failed after ${this.numberOfRetries} retries.`);
            return throwError(error); // no retry
          }

          switch (error.status) {
            case 400:
            case 404:
              return throwError(error); // no retry
          }

          return of(error); // retry
        }),
        delay(this.delayBetweenRetriesMs),
        take(this.numberOfRetries)
      )),
      catchError((error: any, caught: Observable<HttpEvent<any>>) => {
        console.error({ error, caught });
        if (error.status === 401 || error.status === 403) {
          // this.router.navigate(["/accessDenied"]);
        }
        return throwError(error);
      })
    );
  }
}
