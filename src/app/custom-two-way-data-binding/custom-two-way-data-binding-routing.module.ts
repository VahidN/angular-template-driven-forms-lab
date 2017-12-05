import { ParentComponent } from "./parent/parent.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "customTwoWayDataBinding", component: ParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomTwoWayDataBindingRoutingModule { }
