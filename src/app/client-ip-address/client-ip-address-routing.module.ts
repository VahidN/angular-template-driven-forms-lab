import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GetIpComponent } from "./get-ip/get-ip.component";

const routes: Routes = [
  { path: "getIp", component: GetIpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientIpAddressRoutingModule { }
