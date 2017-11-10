import { ReadAppConfigTestComponent } from "./read-app-config-test/read-app-config-test.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "readAppConfig", component: ReadAppConfigTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadAppConfigRoutingModule { }
