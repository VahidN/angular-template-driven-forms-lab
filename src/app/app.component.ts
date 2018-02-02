import { Component } from "@angular/core";

import { SeoService } from "./core/seo-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  title = "T.D. Forms Lab";

  constructor(private seoService: SeoService) {
    this.seoService.enableSeo();
  }

}
