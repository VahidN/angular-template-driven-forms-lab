import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";

import { Ng2FileUploadTestComponent } from "./ng2-file-upload-test/ng2-file-upload-test.component";
import { UploadFileRoutingModule } from "./upload-file-routing.module";
import { UploadFileSimpleService } from "./upload-file-simple.service";
import { UploadFileSimpleComponent } from "./upload-file-simple/upload-file-simple.component";
import { UploadFileWithProgressBarService } from "./upload-file-with-progress-bar.service";
import { UploadFileWithProgressBarComponent } from "./upload-file-with-progress-bar/upload-file-with-progress-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    UploadFileRoutingModule
  ],
  declarations: [
    UploadFileSimpleComponent,
    Ng2FileUploadTestComponent,
    UploadFileWithProgressBarComponent
  ],
  providers: [UploadFileSimpleService, UploadFileWithProgressBarService]
})
export class UploadFileModule { }
