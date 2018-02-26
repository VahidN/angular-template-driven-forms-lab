import { Component, OnInit } from "@angular/core";
import { BrowserStorageService } from "@app/core";

@Component({
  selector: "app-browser-storage-sample-test",
  templateUrl: "./browser-storage-sample-test.component.html",
  styleUrls: ["./browser-storage-sample-test.component.css"]
})
export class BrowserStorageSampleTestComponent implements OnInit {

  fromSessionStorage = "";
  fromLocalStorage = ""

  sessionStorageKey = "sessionStorageKey1";
  localStorageKey = "localStorageKey1"

  constructor(private browserStorage: BrowserStorageService) { }

  ngOnInit() {
  }

  sessionStorageSetItem() {
    this.browserStorage.setSession(this.sessionStorageKey, "Val1");
  }

  sessionStorageGetItem() {
    this.fromSessionStorage = this.browserStorage.getSession(this.sessionStorageKey);
  }

  localStorageSetItem() {
    this.browserStorage.setLocal(this.localStorageKey, { key1: "val1", key2: 2 });
  }

  localStorageGetItem() {
    this.fromLocalStorage = JSON.stringify(this.browserStorage.getLocal(this.localStorageKey));
  }
}
