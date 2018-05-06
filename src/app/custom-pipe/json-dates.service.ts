import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";


@Injectable()
export class JsonDatesService {
  private baseUrl = "api/MomentJalaali";

  constructor(private http: HttpClient) { }

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return observableThrowError(error);
  }

  getDates(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/GetDates`)
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }
}
