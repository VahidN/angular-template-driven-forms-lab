import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AutocompleteRoutingModule } from "./autocomplete-routing.module";
import { AutocompleteSampleComponent } from "./autocomplete-sample/autocomplete-sample.component";
import { SearchService } from "./search.service";

@NgModule({
  imports: [
    CommonModule,
    AutocompleteRoutingModule
  ],
  declarations: [AutocompleteSampleComponent],
  providers: [SearchService]
})
export class AutocompleteModule { }
