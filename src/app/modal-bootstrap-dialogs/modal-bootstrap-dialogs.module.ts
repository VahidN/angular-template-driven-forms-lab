import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ModalBootstrapDialogsRoutingModule } from "./modal-bootstrap-dialogs-routing.module";
import { ModalDialogTestComponent } from "./modal-dialog-test/modal-dialog-test.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalBootstrapDialogsRoutingModule
  ],
  declarations: [ModalDialogTestComponent]
})
export class ModalBootstrapDialogsModule { }
