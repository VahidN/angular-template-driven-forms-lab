import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import { Employee } from "./employee";

@Injectable()
export class FormPosterService {
  private baseUrl = "api/employee";

  constructor(private http: Http) {}

  private extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
  }

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error.statusText);
  }

  postEmployeeForm(employee: Employee): Observable<Employee> {
    const body = JSON.stringify(employee);
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.baseUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractLanguages(res: Response) {
    const body = res.json();
    return body || {};
  }

  getLanguages(): Observable<string[]> {
    return this.http
      .get(`${this.baseUrl}/languages`)
      .map(this.extractLanguages)
      .catch(this.handleError);
  }
}
