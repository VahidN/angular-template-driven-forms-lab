import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError as observableThrowError, throwError } from "rxjs";
import { catchError, delay, map, mergeMap, retryWhen, take } from "rxjs/operators";

import { Employee } from "./employee";


@Injectable()
export class FormPosterService {
  private baseUrl = "api/employee";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return observableThrowError(error);
  }

  postEmployeeForm(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(this.baseUrl, employee, { headers: headers })
      .pipe(
        map((response: any) => response["fields"] || {}),
        retryWhen(errors => errors.pipe(
          mergeMap((error: HttpErrorResponse, retryAttempt: number) => {
            if (retryAttempt === 3 - 1) {
              console.log(`HTTP call failed after 3 retries.`);
              return throwError(error); // no retry
            }

            switch (error.status) {
              case 400:
              case 404:
                return throwError(error); // no retry
            }

            return of(error); // retry
          }),
          delay(1000),
          take(3)
        )),
        catchError(this.handleError)
      );
  }

  getLanguages(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.baseUrl}/languages`)
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }
}
