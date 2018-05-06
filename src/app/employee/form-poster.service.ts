import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

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
    const body = JSON.stringify(employee);
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(this.baseUrl, body, { headers: headers })
      .pipe(
        map((response: any) => response["fields"] || {}),
        catchError(this.handleError));
  }

  getLanguages(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.baseUrl}/languages`)
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }
}
