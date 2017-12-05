import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomTwoWayDataBindingRoutingModule } from "./custom-two-way-data-binding-routing.module";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";

@NgModule({
  imports: [
    CommonModule,
    CustomTwoWayDataBindingRoutingModule
  ],
  declarations: [ParentComponent, ChildComponent]
})
export class CustomTwoWayDataBindingModule { }
