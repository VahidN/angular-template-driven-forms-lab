import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SeoRoutingModule } from "./seo-routing.module";
import { SeoTestsComponent } from "./seo-tests/seo-tests.component";

@NgModule({
  imports: [
    CommonModule,
    SeoRoutingModule
  ],
  declarations: [SeoTestsComponent]
})
export class SeoModule { }
