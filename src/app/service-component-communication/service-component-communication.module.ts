import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FinalComponent } from "./final/final.component";
import { FirstComponent } from "./first/first.component";
import { SampleService } from "./sample.service";
import { SecondComponent } from "./second/second.component";
import { ServiceComponentCommunicationRoutingModule } from "./service-component-communication-routing.module";
import { ThirdComponent } from "./third/third.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceComponentCommunicationRoutingModule
  ],
  declarations: [FirstComponent, SecondComponent, FinalComponent, ThirdComponent],
  providers: [SampleService]
})
export class ServiceComponentCommunicationModule { }
