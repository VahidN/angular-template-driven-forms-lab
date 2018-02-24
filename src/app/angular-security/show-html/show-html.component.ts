import { Component, ElementRef, OnInit, SecurityContext, ViewChild } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";


@Component({
  selector: "app-show-html",
  templateUrl: "./show-html.component.html",
  styleUrls: ["./show-html.component.css"]
})
export class ShowHtmlComponent implements OnInit {

  @ViewChild("dataContainer") dataContainer: ElementRef | null = null;
  htmlContent = "Template <script>alert(\"Hello!\")</script> <b>Syntax</b>";
  html: SafeHtml | null = null;
  sanitizedHtml: string | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.dataContainer) {
      throw new Error("this.dataContainer is null");
    }
    this.dataContainer.nativeElement.innerHTML = "nativeElement <script>alert(\"Hello!\")</script> <b>Syntax</b>";
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      "<b>From DomSanitizer</b><script>alert(\"Hello bypassSecurityTrustHtml!\");</script>");

    this.sanitizedHtml = this.sanitizer.sanitize(SecurityContext.HTML, "<b>Sanitize</b><script>attackerCode()</script>");
  }
}
