import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MomentJalaaliTestComponent } from "./moment-jalaali-test/moment-jalaali-test.component";

const routes: Routes = [
  { path: "momentJalaali", component: MomentJalaaliTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipeRoutingModule {}
