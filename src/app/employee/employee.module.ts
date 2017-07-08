import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { FormPosterService } from './form-poster.service';

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
