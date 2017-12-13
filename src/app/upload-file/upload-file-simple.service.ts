import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Ticket } from "./ticket";

@Injectable()
export class UploadFileSimpleService {
  private baseUrl = "api/SimpleUpload";

  constructor(private http: HttpClient) {}

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

    const headers = new HttpHeaders().set("Accept", "application/json");
    return this.http
      .post(`${this.baseUrl}/SaveTicket`, formData, { headers: headers })
      .map(response => response || {})
      .catch((error: HttpErrorResponse) => {
        console.error("observable error: ", error);
        return Observable.throw(error);
      });
  }
}
