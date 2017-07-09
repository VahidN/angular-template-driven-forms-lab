import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UploadFileRoutingModule } from "./upload-file-routing.module";
import { UploadFileSimpleComponent } from "./upload-file-simple/upload-file-simple.component";
import { UploadFileSimpleService } from "./upload-file-simple.service";

@NgModule({
  imports: [CommonModule, FormsModule, UploadFileRoutingModule],
  declarations: [UploadFileSimpleComponent],
  providers: [UploadFileSimpleService]
})
export class UploadFileModule {}
