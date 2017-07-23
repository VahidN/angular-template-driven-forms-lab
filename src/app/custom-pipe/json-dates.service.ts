import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class JsonDatesService {
  private baseUrl = "api/MomentJalaali";

  constructor(private http: Http) {}

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error.statusText);
  }

  getDates(): Observable<any[]> {
    return this.http
      .get(`${this.baseUrl}/GetDates`)
      .map(response => response.json() || {})
      .catch(this.handleError);
  }
}
