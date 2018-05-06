import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { IP } from "./ip";


@Injectable()
export class JobService {

  constructor(private http: HttpClient) { }

  getIpAddress(): Observable<IP> {
    return this.http
      .get<IP>("https://freegeoip.net/json/?callback").pipe(
        map(response => response || {}),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return observableThrowError(error);
  }
}
