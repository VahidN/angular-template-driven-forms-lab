import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Employee } from "./employee";

@Injectable()
export class FormPosterService {
  private baseUrl = "api/employee";

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error.statusText);
  }

  postEmployeeForm(employee: Employee): Observable<Employee> {
    const body = JSON.stringify(employee);
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(this.baseUrl, body, { headers: headers })
      .map((response: any) => response.fields || {})
      .catch(this.handleError);
  }

  getLanguages(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.baseUrl}/languages`)
      .map(response => response || {})
      .catch(this.handleError);
  }
}
