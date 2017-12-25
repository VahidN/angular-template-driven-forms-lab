import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  postData(): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post("/api/values", { data: "123" }, { headers: headers })
      .map((response: any) => response["fields"] || {})
      .catch(error => Observable.throw(error));
  }
}
