import { ToastyService, ToastOptions } from "ng2-toasty";
import { ErrorHandler, Inject, NgZone } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

export class AppErrorHandler implements ErrorHandler {
  constructor(
    @Inject(NgZone) private ngZone: NgZone,
    @Inject(ToastyService) private toastyService: ToastyService,
    @Inject(LocationStrategy) private locationProvider: LocationStrategy
  ) {}

  handleError(error: any): void {
    console.log("Error:", error);

    const url =
      this.locationProvider instanceof PathLocationStrategy
        ? this.locationProvider.path()
        : "";
    const message = error.message ? error.message : error.toString();
    this.ngZone.run(() => {
      this.toastyService.error(
        <ToastOptions>{
          title: "Error!",
          msg: `URL:${url} \n ERROR:${message}`,
          theme: "bootstrap",
          showClose: true,
          timeout: 15000
        }
      );
    });

    const stackTrace = new Error().stack;
    console.log("stackTrace:", stackTrace);
    // TODO: log on the server --> { message, url, stackTrace }

    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    // throw error;
  }
}
