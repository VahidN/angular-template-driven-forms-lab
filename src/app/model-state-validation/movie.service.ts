import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Movie } from "./movie";


@Injectable()
export class MovieService {

  private baseUrl = "api/movies";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return observableThrowError(error);
  }

  postMovieForm(movie: Movie): Observable<Movie> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(this.baseUrl, movie, { headers: headers })
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }
}
