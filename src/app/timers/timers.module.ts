import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TimersRoutingModule } from "./timers-routing.module";
import { UsingTimersComponent } from "./using-timers/using-timers.component";

@NgModule({
  imports: [
    CommonModule,
    TimersRoutingModule
  ],
  declarations: [UsingTimersComponent]
})
export class TimersModule { }
