import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedBootstrapModule } from "./shared.bootstrap.module";

import { ToastyModule } from "ng2-toasty";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    SharedBootstrapModule,
    ToastyModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    FileUploadModule
  ],
  entryComponents: [
    // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
    ConfirmModalComponent
  ],
  declarations: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
    ConfirmModalComponent
  ],
  exports: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
    CommonModule,
    SharedBootstrapModule,
    ToastyModule,
    SlimLoadingBarModule,
    FileUploadModule
  ]
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
