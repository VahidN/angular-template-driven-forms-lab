import { AppConfigService } from "./../../core/app-config.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-read-app-config-test",
  templateUrl: "./read-app-config-test.component.html",
  styleUrls: ["./read-app-config-test.component.css"]
})
export class ReadAppConfigTestComponent implements OnInit {

  host: string;

  constructor(private appConfig: AppConfigService) { }

  ngOnInit() {
    this.host = this.appConfig.configuration.host;
  }

}
