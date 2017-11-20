import { MovieService } from "./movie.service";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModelStateValidationRoutingModule } from "./model-state-validation-routing.module";
import { ModelStateValidationTestComponent } from "./model-state-validation-test/model-state-validation-test.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelStateValidationRoutingModule
  ],
  declarations: [ModelStateValidationTestComponent],
  providers: [MovieService]
})
export class ModelStateValidationModule { }
