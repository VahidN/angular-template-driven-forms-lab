﻿import { AppConfigService } from "./app-config.service";
import { BrowserStorageService } from "./browser-storage.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [], // components that are used in app.component.ts will be listed here.
  declarations: [], // components that are used in app.component.ts will be listed here.
  providers: [BrowserStorageService, AppConfigService] // singleton services of the whole app will be listed here.
})
export class CoreModule { };

