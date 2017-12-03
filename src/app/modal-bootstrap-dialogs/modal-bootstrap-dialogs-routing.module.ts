import { ModalDialogTestComponent } from "./modal-dialog-test/modal-dialog-test.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "modalDialogTest", component: ModalDialogTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalBootstrapDialogsRoutingModule { }
