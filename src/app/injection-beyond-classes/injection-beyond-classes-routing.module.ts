import { TestProvidersComponent } from "./test-providers/test-providers.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "injectionBeyondClasses", component: TestProvidersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectionBeyondClassesRoutingModule { }
