import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModalBootstrapDialogsRoutingModule } from "./modal-bootstrap-dialogs-routing.module";
import { ModalDialogTestComponent } from "./modal-dialog-test/modal-dialog-test.component";

@NgModule({
  imports: [
    CommonModule,
    ModalBootstrapDialogsRoutingModule
  ],
  declarations: [ModalDialogTestComponent]
})
export class ModalBootstrapDialogsModule { }
