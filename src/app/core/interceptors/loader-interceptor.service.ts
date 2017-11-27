import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";


@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loadingBar: SlimLoadingBarService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // start our loader here
    this.loadingBar.start();
    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loadingBar.complete();
        }
      },
      (err: any) => {
        this.loadingBar.complete();
      });
  }
}
