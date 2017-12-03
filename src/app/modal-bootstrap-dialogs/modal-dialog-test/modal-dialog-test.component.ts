import { ModalService } from "./../../core/modal.service";
import { ConfirmModalComponent } from "./../../shared/confirm-modal/confirm-modal.component";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
  selector: "app-modal-dialog-test",
  templateUrl: "./modal-dialog-test.component.html",
  styleUrls: ["./modal-dialog-test.component.css"]
})
export class ModalDialogTestComponent implements OnInit {

  modalRef: BsModalRef;
  confirmResult: string;

  constructor(
    private bsModalService: BsModalService,
    private modalService: ModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.bsModalService.show(
      template,
      {
        animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false
      });
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnInit() {
  }

  deleteRecord() {
    this.confirmResult = "";
    this.modalService.show(
      ConfirmModalComponent,
      {
        title: "Confirm", message: "Do you want to delete this record?"
      },
      {
        animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false
      }).then(confirmed => {
        if (confirmed) {
          this.confirmResult = "Deleted!";
        } else {
          this.confirmResult = "Canceled!";
        }
      });
  }
}
