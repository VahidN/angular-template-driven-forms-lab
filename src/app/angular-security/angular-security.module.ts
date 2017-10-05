import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AngularSecurityRoutingModule } from "./angular-security-routing.module";
import { SafePipe } from "./show-html/safe.pipe";
import { ShowHtmlComponent } from "./show-html/show-html.component";

@NgModule({
  imports: [
    CommonModule,
    AngularSecurityRoutingModule
  ],
  declarations: [ShowHtmlComponent, SafePipe]
})
export class AngularSecurityModule { }
