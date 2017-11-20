import { Movie } from "./movie";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieService {

  private baseUrl = "api/movies";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error);
  }

  postMovieForm(movie: Movie): Observable<Movie> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(this.baseUrl, movie, { headers: headers })
      .map(response => response || {})
      .catch(this.handleError);
  }
}
