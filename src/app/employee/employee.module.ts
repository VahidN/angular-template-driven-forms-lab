import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { EmployeeRegisterComponent } from "./employee-register/employee-register.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { FormPosterService } from "./form-poster.service";

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ],
  declarations: [EmployeeRegisterComponent],
  providers: [FormPosterService]
})
export class EmployeeModule { }
