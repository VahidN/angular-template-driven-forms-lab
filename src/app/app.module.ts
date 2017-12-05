import { AppConfigService } from "./core/app-config.service";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
// import RxJs needed operators only once
import "./shared/rxjs-operators";

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AngularSecurityModule } from "./angular-security/angular-security.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomPipeModule } from "./custom-pipe/custom-pipe.module";
import { CustomValidatorsModule } from "./custom-validators/custom-validators.module";
import { EmployeeModule } from "./employee/employee.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductModule } from "./product/product.module";
import { SimpleGridModule } from "./simple-grid/simple-grid.module";
import { UploadFileModule } from "./upload-file/upload-file.module";
import { UsingThirdPartyLibrariesModule } from "./using-third-party-libraries/using-third-party-libraries.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { BrowserStorageSampleModule } from "./browser-storage-sample/browser-storage-sample.module";
import { ReadAppConfigModule } from "./read-app-config/read-app-config.module";
import { ModelStateValidationModule } from "./model-state-validation/model-state-validation.module";
import { ServiceComponentCommunicationModule } from "./service-component-communication/service-component-communication.module";
import { ModalBootstrapDialogsModule } from "./modal-bootstrap-dialogs/modal-bootstrap-dialogs.module";
import { CustomTwoWayDataBindingModule } from "./custom-two-way-data-binding/custom-two-way-data-binding.module";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule.forRoot(),
    EmployeeModule,
    ProductModule,
    CustomValidatorsModule,
    UploadFileModule,
    UsingThirdPartyLibrariesModule,
    SimpleGridModule,
    CustomPipeModule,
    AngularSecurityModule,
    BrowserStorageSampleModule,
    ReadAppConfigModule,
    ModelStateValidationModule,
    ServiceComponentCommunicationModule,
    ModalBootstrapDialogsModule,
    CustomTwoWayDataBindingModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
