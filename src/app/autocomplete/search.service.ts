import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchCountries(term: string): Observable<string[]> {
    return this.http
      .get<string[]>(`/api/Typeahead/SearchCountries?term=${encodeURIComponent(term)}`)
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }
}
