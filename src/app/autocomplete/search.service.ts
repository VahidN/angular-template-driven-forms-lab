import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchCountries(term: string): Observable<string[]> {
    return this.http
      .get(`/api/Typeahead/SearchCountries?term=${encodeURIComponent(term)}`)
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => ErrorObservable.create(error))
      );
  }
}
