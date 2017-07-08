import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

import { Category } from "./category";
import { Product } from "./product";

@Injectable()
export class ProductItemsService {

  private baseUrl = "api/product";

  constructor(private http: Http) { }

  private handleError(error: Response): Observable<any> {
    console.error("observable error: ", error);
    return Observable.throw(error.statusText);
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get(`${this.baseUrl}/GetCategories`)
      .map(response => response.json() || {})
      .catch(this.handleError);
  }

  getProducts(categoryId: number): Observable<Product[]> {
    return this.http
      .get(`${this.baseUrl}/GetProducts/${categoryId}`)
      .map(response => response.json() || {})
      .catch(this.handleError);
  }
}
