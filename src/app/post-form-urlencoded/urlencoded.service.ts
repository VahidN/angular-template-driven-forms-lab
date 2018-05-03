import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class UrlencodedService {

  constructor(private http: HttpClient) { }

  doRefreshToken(refreshToken: string): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    // HttpParams is an `immutable` object an must be called this way. After the `;` you can't modify this object anymore.
    const body = new HttpParams()
      .set("grant_type", "refresh_token")
      .set("refresh_token", refreshToken);
    return this.http.post("/api/Urlencoded", body.toString(), { headers: headers })
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => ErrorObservable.create(error))
      );
  }
}
