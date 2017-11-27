import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToastyModule } from "ng2-toasty";
import { BsDropdownModule } from "ngx-bootstrap";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    BsDropdownModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    FileUploadModule
  ],
  declarations: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
  ],
  exports: [
    CommonModule,
    ToastyModule,
    BsDropdownModule,
    SlimLoadingBarModule,
    FileUploadModule
  ], // common and shared components/directives/pipes between more than one module and components will be listed here.
  /* No providers here! Since they’ll be already provided in AppModule. */
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    // Forcing the whole app to use the returned providers from the AppModule only.
    return {
      ngModule: SharedModule,
      providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
    };
  }
};
