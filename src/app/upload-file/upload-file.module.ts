import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UploadFileRoutingModule } from "./upload-file-routing.module";
import { UploadFileSimpleComponent } from "./upload-file-simple/upload-file-simple.component";
import { UploadFileSimpleService } from "./upload-file-simple.service";
import { Ng2FileUploadTestComponent } from "./ng2-file-upload-test/ng2-file-upload-test.component";
import { UploadFileWithProgressBarComponent } from "./upload-file-with-progress-bar/upload-file-with-progress-bar.component";

import { FileUploadModule } from "ng2-file-upload";
import { UploadFileWithProgressBarService } from './upload-file-with-progress-bar.service';

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
export class UploadFileModule {}
