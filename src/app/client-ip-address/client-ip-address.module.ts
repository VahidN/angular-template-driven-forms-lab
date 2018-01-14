import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ClientIpAddressRoutingModule } from "./client-ip-address-routing.module";
import { GetIpComponent } from "./get-ip/get-ip.component";
import { JobService } from "./job.service";

@NgModule({
  imports: [
    CommonModule,
    ClientIpAddressRoutingModule
  ],
  declarations: [GetIpComponent],
  providers: [JobService]
})
export class ClientIpAddressModule { }
