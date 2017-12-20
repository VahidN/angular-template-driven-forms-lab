import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { ToastyModule } from "ng2-toasty";

import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
import { SharedBootstrapModule } from "./shared.bootstrap.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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
    FormsModule,
    HttpClientModule,
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
