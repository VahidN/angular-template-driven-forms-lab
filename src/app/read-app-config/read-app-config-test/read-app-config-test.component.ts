import { Component, OnInit } from "@angular/core";

import { AppConfigService } from "./../../core/app-config.service";

@Component({
  selector: "app-read-app-config-test",
  templateUrl: "./read-app-config-test.component.html",
  styleUrls: ["./read-app-config-test.component.css"]
})
export class ReadAppConfigTestComponent implements OnInit {

  host: string | null = null;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit() {
    this.host = this.appConfig.configuration.host;
  }

}
