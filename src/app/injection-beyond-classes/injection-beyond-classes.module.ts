import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarService } from "./car.service";
import { ThisModuleConfig, APP_CONFIG } from "./thismodule.config";

import { InjectionBeyondClassesRoutingModule } from "./injection-beyond-classes-routing.module";
import { TestProvidersComponent } from "./test-providers/test-providers.component";
import { HttpClient } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    InjectionBeyondClassesRoutingModule
  ],
  declarations: [TestProvidersComponent],
  providers: [
    // ------ useValue
    { provide: "API_BASE_HREF", useValue: "http://localhost:5000" },
    { provide: "APP_BASE_HREF", useValue: document.location.pathname },
    { provide: "IS_PROD", useValue: true },
    { provide: "APIKey", useValue: "XYZ1234ABC" },
    { provide: "Random", useValue: Math.random() },
    {
      provide: "emailApiConfig", useValue: Object.freeze({
        apiKey: "email-key",
        context: "registration"
      })
    },
    { provide: "languages", useValue: "en", multi: true },
    { provide: "languages", useValue: "fa", multi: true },
    { provide: APP_CONFIG, useValue: ThisModuleConfig },
    // ------ useFactory
    { provide: "BASE_URL", useFactory: getBaseUrl },
    { provide: "RandomFactory", useFactory: randomFactory },
    { provide: "Car_Service", useFactory: carServiceFactory, deps: [HttpClient] },
    // ------ useClass
    { provide: "Car_Service_Name1", useClass: CarService },
    // ------ useExisting
    { provide: "Car_Service_Token2", useExisting: "Car_Service_Name1" },
  ]
})
export class InjectionBeyondClassesModule { }

export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}

export function randomFactory() {
  return Math.random();
}

export function carServiceFactory(http: HttpClient) {
  return new CarService(http);
}
