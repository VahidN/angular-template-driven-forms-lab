import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { ToastyService, ToastOptions } from "ng2-toasty";
import { FileUploader, FileUploaderOptions } from "ng2-file-upload";

import { Ticket } from "./../ticket";

@Component({
  selector: "app-ng2-file-upload-test",
  templateUrl: "./ng2-file-upload-test.component.html",
  styleUrls: ["./ng2-file-upload-test.component.css"]
})
export class Ng2FileUploadTestComponent implements OnInit {
  fileUploader: FileUploader;
  model = new Ticket();

  constructor(private toastyService: ToastyService) {}

  ngOnInit() {
    this.initUploader();
  }

  initUploader() {
    this.fileUploader = new FileUploader(
      <FileUploaderOptions>{
        url: "api/SimpleUpload/SaveTicket",
        headers: [
          { name: "X-XSRF-TOKEN", value: this.getCookie("XSRF-TOKEN") },
          { name: "Accept", value: "application/json" }
        ],
        isHTML5: true,
        // allowedMimeType: ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/zip"]
        allowedFileType: [
          "application",
          "image",
          "video",
          "audio",
          "pdf",
          "compress",
          "doc",
          "xls",
          "ppt"
        ],
        removeAfterUpload: true,
        autoUpload: false,
        maxFileSize: 10 * 1024 * 1024
      }
    );

    this.fileUploader.onBuildItemForm = (fileItem, form) => {
      for (const key in this.model) {
        if (this.model.hasOwnProperty(key)) {
          form.append(key, this.model[key]);
        }
      }
    };

    this.fileUploader.onCompleteAll = () => {
      // clear the form
      // this.model = new Ticket();

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
    };

    this.fileUploader.onWhenAddingFileFailed = (item, filter, options) => {
      this.toastyService.error(
        <ToastOptions>{
          title: "Error!",
          msg: `You can't select ${item.name} file because of the ${filter.name} filter.`,
          theme: "bootstrap",
          showClose: true,
          timeout: 15000
        }
      );
    };

    this.fileUploader.onErrorItem = (fileItem, response, status, headers) => {
      this.toastyService.error(
        <ToastOptions>{
          title: "Error uploading file!",
          msg: `${response} -> ${fileItem.file.name}`,
          theme: "bootstrap",
          showClose: true,
          timeout: 15000
        }
      );
    };

    this.fileUploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const ticket = JSON.parse(response);
        console.log(`ticket:`, ticket);
      }
    };
  }

  getCookie(name: string): string {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(";").shift());
    }
  }

  submitForm(form: NgForm) {
    console.log("this.model", this.model);
    console.log("form.value", form.value);
    console.log("this.fileUploader", this.fileUploader);

    this.fileUploader.uploadAll();

    // NOTE: Upload multiple files in one request -> https://github.com/valor-software/ng2-file-upload/issues/671
  }
}
