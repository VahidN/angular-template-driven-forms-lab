import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserStorageSampleRoutingModule } from "./browser-storage-sample-routing.module";
import { BrowserStorageSampleTestComponent } from "./browser-storage-sample-test/browser-storage-sample-test.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserStorageSampleRoutingModule
  ],
  declarations: [BrowserStorageSampleTestComponent]
})
export class BrowserStorageSampleModule { }
