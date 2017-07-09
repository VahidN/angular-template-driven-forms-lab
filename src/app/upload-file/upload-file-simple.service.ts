import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

import { Ticket } from "./ticket";

@Injectable()
export class UploadFileSimpleService {
  private baseUrl = "api/SimpleUpload";

  constructor(private http: Http) {}

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error.statusText);
  }

  postTicket(ticket: Ticket, filesList: FileList): Observable<any> {
    if (!filesList || filesList.length === 0) {
      return Observable.throw("Please select a file.");
    }

    const formData: FormData = new FormData();

    for (const key in ticket) {
      if (ticket.hasOwnProperty(key)) {
        formData.append(key, ticket[key]);
      }
    }

    for (let i = 0; i < filesList.length; i++) {
      formData.append(filesList[i].name, filesList[i]);
    }

    const headers = new Headers();
    headers.append("Accept", "application/json");
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${this.baseUrl}/SaveTicket`, formData, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
