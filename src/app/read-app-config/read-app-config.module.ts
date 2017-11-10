import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReadAppConfigRoutingModule } from "./read-app-config-routing.module";
import { ReadAppConfigTestComponent } from "./read-app-config-test/read-app-config-test.component";

@NgModule({
  imports: [
    CommonModule,
    ReadAppConfigRoutingModule
  ],
  declarations: [ReadAppConfigTestComponent]
})
export class ReadAppConfigModule { }
