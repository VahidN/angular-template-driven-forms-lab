import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  postData(): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post("/api/values", { data: "123" }, { headers: headers })
      .pipe(
        map((response: any) => response["fields"] || {}),
        catchError(error => observableThrowError(error)));
  }
}
