import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UntypedShaComponent } from "./untyped-sha/untyped-sha.component";
import { TypedShaComponent } from "./typed-sha/typed-sha.component";

const routes: Routes = [
  { path: "untypedSha", component: UntypedShaComponent },
  { path: "typedSha", component: TypedShaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsingThirdPartyLibrariesRoutingModule {}
