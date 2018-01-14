import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IP } from "./ip";

@Injectable()
export class JobService {

  constructor(private http: HttpClient) { }

  getIpAddress(): Observable<IP> {
    return this.http
      .get<IP>("https://freegeoip.net/json/?callback")
      .map(response => response || {})
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error);
  }
}
