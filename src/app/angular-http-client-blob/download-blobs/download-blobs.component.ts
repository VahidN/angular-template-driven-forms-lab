import { WindowRefService } from "./../../core/window.service";
import { DownloadBinaryDataService } from "app/angular-http-client-blob/download-binary-data.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  templateUrl: "./download-blobs.component.html",
  styleUrls: ["./download-blobs.component.css"]
})
export class DownloadBlobsComponent implements OnInit {

  @ViewChild("sampleImage1") sampleImage1: ElementRef;
  private nativeWindow: Window;
  imageBlobUrl: string;
  sanitizedImageBlobUrl: SafeUrl;

  constructor(private downloadService: DownloadBinaryDataService,
    private windowRefService: WindowRefService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.nativeWindow = this.windowRefService.nativeWindow;
    this.downloadService.getImage().subscribe(imageDataBlob => {
      const urlCreator = this.nativeWindow.URL;
      this.imageBlobUrl = urlCreator.createObjectURL(imageDataBlob); // doesn't work -> <img [src]="imageBlobUrl">
      this.sampleImage1.nativeElement.src = this.imageBlobUrl; // works -> <img #sampleImage1>
      this.sanitizedImageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageBlobUrl); // works -> <img [src]="sanitizedImageBlobUrl">
    });
  }
}
