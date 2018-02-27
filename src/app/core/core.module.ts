import "./rxjs-operators";

import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, ErrorHandler, NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppConfigService } from "./app-config.service";
import { AppErrorHandler } from "./app.error-handler";
import { BreadCrumbComponent } from "./bread-crumb/bread-crumb.component";
import { BrowserStorageService } from "./browser-storage.service";
import { LoaderInterceptorService } from "./interceptors/loader-interceptor.service";
import { ModalService } from "./modal.service";
import { SeoService } from "./seo-service";
import { WindowRefService } from "./window.service";

// import RxJs needed operators only once
@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    // components that are used in app.component.ts will be listed here.
    BreadCrumbComponent
  ],
  declarations: [
    // components that are used in app.component.ts will be listed here.
    BreadCrumbComponent
  ],
  providers: [
    // global singleton services of the whole app will be listed here.
    BrowserStorageService,
    AppConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfigService) => () => config.loadClientConfig(),
      deps: [AppConfigService],
      multi: true
    },
    ModalService,
    WindowRefService,
    SeoService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("CoreModule should be imported ONLY in AppModule.");
    }
  }
};

