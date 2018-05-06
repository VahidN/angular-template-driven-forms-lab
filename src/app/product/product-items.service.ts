import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Category } from "./category";
import { Product } from "./product";


@Injectable()
export class ProductItemsService {
  private baseUrl = "api/product";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return observableThrowError(error);
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${this.baseUrl}/GetCategories`)
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.baseUrl}/GetProducts/${categoryId}`)
      .pipe(
        map(response => response || {}),
        catchError(this.handleError));
  }
}
