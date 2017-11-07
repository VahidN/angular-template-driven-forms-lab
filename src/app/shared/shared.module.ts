import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [], // common and shared components between more than one module and components will be listed here.
  exports: [CommonModule], // common and shared components between more than one module and components will be listed here.
  providers: []
})
export class SharedModule { };
