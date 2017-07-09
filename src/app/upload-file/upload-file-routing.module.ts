import { UploadFileSimpleComponent } from "./upload-file-simple/upload-file-simple.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "uploadFileSimple", component: UploadFileSimpleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule {}
