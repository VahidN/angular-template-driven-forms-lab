import { FormsModule } from "@angular/forms";
import { SampleService } from "./sample.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServiceComponentCommunicationRoutingModule } from "./service-component-communication-routing.module";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { FinalComponent } from "./final/final.component";
import { ThirdComponent } from './third/third.component';

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
