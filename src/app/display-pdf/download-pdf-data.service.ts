import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DownloadPdfDataService {

  constructor(private httpClient: HttpClient) { }

  public getReport(): Observable<Blob> {
    return this.httpClient.get("/api/Reports/GetPdfReport", { responseType: "blob" });
  }
}
