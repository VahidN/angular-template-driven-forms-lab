import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomValidatorsRoutingModule } from "./custom-validators-routing.module";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { EqualValidatorDirective } from "./equal-validator.directive";
import { EmailValidatorDirective } from "./email-validator.directive";
import { RemoteValidatorDirective } from "./remote-validator.directive";

@NgModule({
  imports: [CommonModule, FormsModule, CustomValidatorsRoutingModule],
  declarations: [
    UserRegisterComponent,
    EqualValidatorDirective,
    EmailValidatorDirective,
    RemoteValidatorDirective
  ]
})
export class CustomValidatorsModule {}
