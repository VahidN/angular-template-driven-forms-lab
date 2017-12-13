import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class JsonDatesService {
  private baseUrl = "api/MomentJalaali";

  constructor(private http: HttpClient) {}

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error);
  }

  getDates(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}/GetDates`)
      .map(response => response || {})
      .catch(this.handleError);
  }
}
