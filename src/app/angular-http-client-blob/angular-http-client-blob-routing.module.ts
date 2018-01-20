import { DownloadBlobsComponent } from "./download-blobs/download-blobs.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "downloadBlobs", component: DownloadBlobsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularHttpClientBlobRoutingModule { }
