import { Observable } from "rxjs/Observable";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { PagedQueryModel } from "./paged-query-model";
import { PagedQueryResult } from "./paged-query-result";
import { AppProduct } from "./app-product";

@Injectable()
export class ProductsListService {
  private baseUrl = "api/Product";

  constructor(private http: HttpClient) {}

  getPagedProductsList(
    queryModel: PagedQueryModel
  ): Observable<PagedQueryResult<AppProduct>> {
    return this.http
      .get<PagedQueryResult<AppProduct>>(
        `${this.baseUrl}/GetPagedProducts?${this.toQueryString(queryModel)}`
      )
      .map(result => {
        return new PagedQueryResult<AppProduct>(
          result.totalItems,
          result.items
        );
      });
  }

  toQueryString(obj: any): string {
    const parts = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== null && value !== undefined) {
          parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
      }
    }
    return parts.join("&");
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error);
  }

  addAppProduct(item: AppProduct): Observable<AppProduct> {
    const header = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post<AppProduct>(`${this.baseUrl}/AddProduct`, JSON.stringify(item), {
        headers: header
      })
      .map(response => response || {})
      .catch(this.handleError);
  }

  updateAppProduct(id: number, item: AppProduct): Observable<AppProduct> {
    const header = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .put<AppProduct>(
        `${this.baseUrl}/UpdateProduct/${id}`,
        JSON.stringify(item),
        { headers: header }
      )
      .map(response => response || {})
      .catch(this.handleError);
  }

  deleteAppProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteProduct/${id}`);
  }
}
