import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LinqLikeMethodsRoutingModule } from "./linq-like-methods-routing.module";
import { LinqTestsComponent } from "./linq-tests/linq-tests.component";

@NgModule({
  imports: [
    CommonModule,
    LinqLikeMethodsRoutingModule
  ],
  declarations: [LinqTestsComponent]
})
export class LinqLikeMethodsModule { }
