import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { Category } from "./category";
import { Product } from "./product";

@Injectable()
export class ProductItemsService {
  private baseUrl = "api/product";

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error);
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${this.baseUrl}/GetCategories`)
      .map(response => response || {})
      .catch(this.handleError);
  }

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.baseUrl}/GetProducts/${categoryId}`)
      .map(response => response || {})
      .catch(this.handleError);
  }
}
