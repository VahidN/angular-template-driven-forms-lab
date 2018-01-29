import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BreadCrumbSampleRoutingModule } from "./bread-crumb-sample-routing.module";
import { Parent1Component } from "./parent1/parent1.component";
import { Parent1Child1Component } from "./parent1-child1/parent1-child1.component";
import { Parent1Child1Child1Component } from "./parent1-child1-child1/parent1-child1-child1.component";

@NgModule({
  imports: [
    CommonModule,
    BreadCrumbSampleRoutingModule
  ],
  declarations: [Parent1Component, Parent1Child1Component, Parent1Child1Child1Component]
})
export class BreadCrumbSampleModule { }
