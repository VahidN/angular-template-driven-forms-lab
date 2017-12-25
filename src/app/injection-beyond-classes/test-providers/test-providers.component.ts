import { Component, Inject, OnInit } from "@angular/core";

import { APP_CONFIG, IThisModuleConfig } from "./../thismodule.config";

@Component({
  selector: "app-test-providers",
  templateUrl: "./test-providers.component.html",
  styleUrls: ["./test-providers.component.css"]
})
export class TestProvidersComponent implements OnInit {

  fromRandomFactory: string;

  constructor(
    @Inject("API_BASE_HREF") public apiBaseHref: string,
    @Inject("APP_BASE_HREF") public appBaseHref: string,
    @Inject("IS_PROD") public isProd: boolean,
    @Inject("APIKey") public apiKey: string,
    @Inject("Random") public random: string,
    @Inject("emailApiConfig") public emailApiConfig: any,
    @Inject("languages") public languages: string[],
    @Inject(APP_CONFIG) public config: IThisModuleConfig,
    @Inject("BASE_URL") public baseUrl: string,
    @Inject("RandomFactory") public randomFactory: string
  ) { }

  ngOnInit() {
  }

  callRandomFactory() {
    this.fromRandomFactory = this.randomFactory;
  }

}
