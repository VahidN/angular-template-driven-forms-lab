import { DownloadPdfDataService } from "./download-pdf-data.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DisplayPdfRoutingModule } from "./display-pdf-routing.module";
import { ViewPdfComponent } from "./view-pdf/view-pdf.component";

@NgModule({
  imports: [
    CommonModule,
    DisplayPdfRoutingModule
  ],
  declarations: [ViewPdfComponent],
  providers: [DownloadPdfDataService]
})
export class DisplayPdfModule { }
