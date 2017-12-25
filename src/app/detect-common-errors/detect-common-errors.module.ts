import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetectCommonErrorsRoutingModule } from './detect-common-errors-routing.module';
import { DetectCommonErrorsTestComponent } from './detect-common-errors-test/detect-common-errors-test.component';

@NgModule({
  imports: [
    CommonModule,
    DetectCommonErrorsRoutingModule
  ],
  declarations: [DetectCommonErrorsTestComponent]
})
export class DetectCommonErrorsModule { }
