import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastOptions, ToastyService } from "ng2-toasty";

import { Ticket } from "./../ticket";
import { UploadFileSimpleService } from "./../upload-file-simple.service";

@Component({
  selector: "app-upload-file-simple",
  templateUrl: "./upload-file-simple.component.html",
  styleUrls: ["./upload-file-simple.component.css"]
})
export class UploadFileSimpleComponent implements OnInit {
  @ViewChild("screenshotInput") screenshotInput: ElementRef;
  model = new Ticket();

  constructor(
    private uploadService: UploadFileSimpleService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() { }

  fileChange(event: any) {
    const filesList: FileList = event.target.files;
    console.log("fileChange() -> filesList", filesList);
  }

  submitForm(form: NgForm) {
    console.log("this.model", this.model);
    console.log("form.value", form.value);

    const fileInput: HTMLInputElement = this.screenshotInput.nativeElement;
    console.log("fileInput.files", fileInput.files);

    if (!fileInput.files) {
      return;
    }

    this.uploadService
      .postTicket(this.model, fileInput.files)
      .subscribe((data: any) => {
        console.log("success: ", data);
        this.toastyService.success(
          <ToastOptions>{
            title: "Success!",
            msg:
              "Your ticket has been submitted successfully and will be resolved shortly!",
            theme: "bootstrap",
            showClose: true,
            timeout: 15000
          }
        );
      });
  }
}
