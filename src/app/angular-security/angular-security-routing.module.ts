import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShowHtmlComponent } from "./show-html/show-html.component";

const routes: Routes = [
  { path: "showHtml", component: ShowHtmlComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularSecurityRoutingModule { }
