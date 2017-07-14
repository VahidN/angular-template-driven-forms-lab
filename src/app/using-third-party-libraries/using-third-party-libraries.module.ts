import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsingThirdPartyLibrariesRoutingModule } from "./using-third-party-libraries-routing.module";
import { TypedShaComponent } from './typed-sha/typed-sha.component';
import { UntypedShaComponent } from './untyped-sha/untyped-sha.component';

@NgModule({
  imports: [CommonModule, UsingThirdPartyLibrariesRoutingModule],
  declarations: [TypedShaComponent, UntypedShaComponent]
})
export class UsingThirdPartyLibrariesModule {}
