import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

import { WindowRefService } from "./../../core/window.service";
import { DownloadPdfDataService } from "./../download-pdf-data.service";

@Component({
  selector: "app-view-pdf",
  templateUrl: "./view-pdf.component.html",
  styleUrls: ["./view-pdf.component.css"]
})
export class ViewPdfComponent implements OnInit {

  private nativeWindow: Window | null = null;
  private pdfBlobUrl: string | null = null;
  sanitizedPdfBlobResourceUrl: SafeResourceUrl | null = null;

  constructor(private downloadService: DownloadPdfDataService,
    private windowRefService: WindowRefService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.nativeWindow = this.windowRefService.nativeWindow;
    this.downloadService.getReport().subscribe(pdfDataBlob => {
      if (!this.nativeWindow) {
        throw new Error("this.nativeWindow is null");
      }
      console.log("pdfDataBlob", pdfDataBlob);
      const urlCreator = this.nativeWindow.URL;
      this.pdfBlobUrl = urlCreator.createObjectURL(pdfDataBlob);
      console.log("pdfBlobUrl", this.pdfBlobUrl);
      this.sanitizedPdfBlobResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfBlobUrl);
    });
  }

  printPdf() {
    if (!this.pdfBlobUrl) {
      throw new Error("this.pdfBlobUrl is null");
    }
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = this.pdfBlobUrl;
    document.body.appendChild(iframe);
    if (iframe.contentWindow) {
      // iframe.contentWindow.print(); // needs 2.8.2
    }
  }

  showPdf() {
    if (!this.pdfBlobUrl) {
      throw new Error("this.pdfBlobUrl is null");
    }
    if (!this.nativeWindow) {
      throw new Error("this.nativeWindow is null");
    }
    this.nativeWindow.open(this.pdfBlobUrl);
  }

  downloadPdf() {
    if (!this.pdfBlobUrl) {
      throw new Error("this.pdfBlobUrl is null");
    }
    const fileName = "test.pdf";
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = this.pdfBlobUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
  }

  // Tips:
  // 1- How do I enable/disable the built-in pdf viewer of FireFox
  // https://support.mozilla.org/en-US/kb/disable-built-pdf-viewer-and-use-another-viewer
  // 2- How to configure browsers to use the Adobe PDF plug-in to open PDF files
  // https://helpx.adobe.com/acrobat/kb/pdf-browser-plugin-configuration.html
  // https://helpx.adobe.com/acrobat/using/display-pdf-in-browser.html
  // 3- Microsoft Edge is gaining new PDF reader features within the Windows 10 Fall Creator’s Update (version 1709).
}
