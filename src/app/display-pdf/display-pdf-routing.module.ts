import { ViewPdfComponent } from "./view-pdf/view-pdf.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "viewPdf", component: ViewPdfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayPdfRoutingModule { }
