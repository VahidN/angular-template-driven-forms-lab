import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
// import RxJs needed operators only once
import "./shared/rxjs-operators";

import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FileUploadModule } from "ng2-file-upload";
import { ToastyModule } from "ng2-toasty";
import { BsDropdownModule } from "ngx-bootstrap";

import { AngularSecurityModule } from "./angular-security/angular-security.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppErrorHandler } from "./app.error-handler";
import { CustomPipeModule } from "./custom-pipe/custom-pipe.module";
import { CustomValidatorsModule } from "./custom-validators/custom-validators.module";
import { EmployeeModule } from "./employee/employee.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductModule } from "./product/product.module";
import { SimpleGridModule } from "./simple-grid/simple-grid.module";
import { UploadFileModule } from "./upload-file/upload-file.module";
import { UsingThirdPartyLibrariesModule } from "./using-third-party-libraries/using-third-party-libraries.module";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FileUploadModule,
    EmployeeModule,
    ProductModule,
    CustomValidatorsModule,
    UploadFileModule,
    UsingThirdPartyLibrariesModule,
    SimpleGridModule,
    CustomPipeModule,
    AngularSecurityModule,
    AppRoutingModule
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
