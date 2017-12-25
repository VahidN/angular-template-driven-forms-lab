import { HttpErrorResponse, HttpEvent, HttpEventType } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastOptions, ToastyService } from "ng2-toasty";

import { Ticket } from "./../ticket";
import { UploadFileWithProgressBarService } from "./../upload-file-with-progress-bar.service";

@Component({
  selector: "app-upload-file-with-progress-bar",
  templateUrl: "./upload-file-with-progress-bar.component.html",
  styleUrls: ["./upload-file-with-progress-bar.component.css"]
})
export class UploadFileWithProgressBarComponent implements OnInit {
  @ViewChild("screenshotInput") screenshotInput: ElementRef;
  model = new Ticket();

  queueProgress: number;
  isUploading: boolean;
  uploadTimeRemaining: number;
  uploadTimeElapsed: number;
  uploadSpeed: number;

  constructor(
    private uploadService: UploadFileWithProgressBarService,
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

    this.queueProgress = 0;
    this.isUploading = true;
    let startTime = Date.now();

    if (!fileInput.files) {
      return;
    }

    this.uploadService.postTicket(this.model, fileInput.files).subscribe(
      (event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            startTime = Date.now();
            console.log("Request sent!");
            break;
          case HttpEventType.DownloadProgress:
          case HttpEventType.UploadProgress:
            if (event.total) {
              this.queueProgress = Math.round(event.loaded / event.total * 100);

              const timeElapsed = Date.now() - startTime;
              const uploadSpeed = event.loaded / (timeElapsed / 1000);
              this.uploadTimeRemaining = Math.ceil(
                (event.total - event.loaded) / uploadSpeed
              );
              this.uploadTimeElapsed = Math.ceil(timeElapsed / 1000);
              this.uploadSpeed = uploadSpeed / 1024 / 1024;
            }
            break;
          case HttpEventType.Response:
            this.queueProgress = 100;
            this.isUploading = false;
            console.log("Done! ResponseBody:", event.body);
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
            break;
        }
      },
      (error: HttpErrorResponse) => {
        this.isUploading = false;

        console.log(error);
        this.toastyService.error(
          <ToastOptions>{
            title: "Error!",
            msg: `${error.message}`,
            theme: "bootstrap",
            showClose: true,
            timeout: 15000
          }
        );
      }
    );
  }
}
