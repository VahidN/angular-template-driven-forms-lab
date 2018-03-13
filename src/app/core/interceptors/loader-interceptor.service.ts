import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  private pendingRequests = 0;
  private showLoading = false;

  constructor(private loadingBar: SlimLoadingBarService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.pendingRequests++;
    this.showLoadingBar();

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.hideLoadingBar();
          }
        },
        () => {
          this.pendingRequests = 0;
          this.hideLoadingBar();
        },
        () => {
          this.pendingRequests = 0;
          this.hideLoadingBar();
        })
    );
  }

  private showLoadingBar() {
    if (!this.showLoading) {
      this.loadingBar.start();
      this.showLoading = true;
    }
  }

  private hideLoadingBar() {
    this.pendingRequests--;
    if (this.pendingRequests <= 0) {
      this.loadingBar.complete();
      this.showLoading = false;
      this.pendingRequests = 0;
    }
  }
}
