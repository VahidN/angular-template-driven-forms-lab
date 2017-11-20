import { ModelStateValidationTestComponent } from "./model-state-validation-test/model-state-validation-test.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "modelStateValidationTest", component: ModelStateValidationTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelStateValidationRoutingModule { }
