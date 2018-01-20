import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularHttpClientBlobRoutingModule } from "./angular-http-client-blob-routing.module";
import { DownloadBlobsComponent } from "./download-blobs/download-blobs.component";
import { DownloadBinaryDataService } from "app/angular-http-client-blob/download-binary-data.service";

@NgModule({
  imports: [
    CommonModule,
    AngularHttpClientBlobRoutingModule
  ],
  declarations: [DownloadBlobsComponent],
  providers: [DownloadBinaryDataService]
})
export class AngularHttpClientBlobModule { }
