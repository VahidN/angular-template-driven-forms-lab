import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LinqTestsComponent } from "./linq-tests/linq-tests.component";

const routes: Routes = [
  { path: "linqTests", component: LinqTestsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinqLikeMethodsRoutingModule { }
