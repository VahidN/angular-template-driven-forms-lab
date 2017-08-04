import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Response, Headers } from "@angular/http";
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

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error.statusText);
  }

  addAppProduct(item: AppProduct): Observable<AppProduct> {
    const header = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: header });
    return this.http
      .post(`${this.baseUrl}/AddProduct`, JSON.stringify(item), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateAppProduct(id: number, item: AppProduct): Observable<AppProduct> {
    const header = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: header });
    return this.http
      .put(`${this.baseUrl}/UpdateProduct/${id}`, JSON.stringify(item), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteAppProduct(id: number): Observable<Response> {
    return this.http.delete(`${this.baseUrl}/DeleteProduct/${id}`);
  }
}
