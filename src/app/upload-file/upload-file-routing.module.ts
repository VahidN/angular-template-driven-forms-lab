import { Ng2FileUploadTestComponent } from "./ng2-file-upload-test/ng2-file-upload-test.component";
import { UploadFileSimpleComponent } from "./upload-file-simple/upload-file-simple.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "uploadFileSimple", component: UploadFileSimpleComponent },
  { path: "ng2FileUploadTest", component: Ng2FileUploadTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule {}
