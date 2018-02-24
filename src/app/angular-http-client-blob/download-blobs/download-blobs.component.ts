import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { DownloadBinaryDataService } from "app/angular-http-client-blob/download-binary-data.service";

import { WindowRefService } from "./../../core/window.service";

@Component({
  templateUrl: "./download-blobs.component.html",
  styleUrls: ["./download-blobs.component.css"]
})
export class DownloadBlobsComponent implements OnInit {

  @ViewChild("sampleImage1") sampleImage1: ElementRef | null = null;
  private nativeWindow: Window | null = null;
  imageBlobUrl: string | null = null;
  sanitizedImageBlobUrl: SafeUrl | null = null;

  constructor(private downloadService: DownloadBinaryDataService,
    private windowRefService: WindowRefService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.nativeWindow = this.windowRefService.nativeWindow;
    this.downloadService.getImage().subscribe(imageDataBlob => {
      if (!this.nativeWindow || !this.sampleImage1) {
        return;
      }
      const urlCreator = this.nativeWindow.URL;
      this.imageBlobUrl = urlCreator.createObjectURL(imageDataBlob); // doesn't work -> <img [src]="imageBlobUrl">
      this.sampleImage1.nativeElement.src = this.imageBlobUrl; // works -> <img #sampleImage1>
      this.sanitizedImageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageBlobUrl); // works -> <img [src]="sanitizedImageBlobUrl">
    });
  }
}
