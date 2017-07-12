import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EmployeeModule } from "./employee/employee.module";
import { ProductModule } from "./product/product.module";

import { ToastyModule } from "ng2-toasty";
import { AppErrorHandler } from "./app.error-handler";

import { BsDropdownModule } from "ngx-bootstrap";
import { CustomValidatorsModule } from "./custom-validators/custom-validators.module";
import { UploadFileModule } from "./upload-file/upload-file.module";

import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpModule,
    FileUploadModule,
    EmployeeModule,
    ProductModule,
    CustomValidatorsModule,
    UploadFileModule,
    AppRoutingModule
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule {}
