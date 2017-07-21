import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { PagedQueryModel } from "./paged-query-model";
import { PagedQueryResult } from "./paged-query-result";
import { AppProduct } from "./app-product";

@Injectable()
export class ProductsListService {
  private baseUrl = "api/Product";

  constructor(private http: Http) {}

  getPagedProductsList(
    queryModel: PagedQueryModel
  ): Observable<PagedQueryResult<AppProduct>> {
    return this.http
      .get(`${this.baseUrl}/GetPagedProducts?${this.toQueryString(queryModel)}`)
      .map(res => {
        const result = res.json();
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
}
