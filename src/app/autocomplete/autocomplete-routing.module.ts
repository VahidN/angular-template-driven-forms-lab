import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AutocompleteSampleComponent } from "./autocomplete-sample/autocomplete-sample.component";

const routes: Routes = [
  { path: "autocomplete", component: AutocompleteSampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompleteRoutingModule { }
