import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DownloadBinaryDataService {

  constructor(private httpClient: HttpClient) { }

  public getImage(): Observable<Blob> {
    return this.httpClient.get("/api/ShowImages/GetImage", { responseType: "blob" });
  }
}
