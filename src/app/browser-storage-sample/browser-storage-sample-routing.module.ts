import { BrowserStorageSampleTestComponent } from "./browser-storage-sample-test/browser-storage-sample-test.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "showBrowserStorageSample", component: BrowserStorageSampleTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowserStorageSampleRoutingModule { }
