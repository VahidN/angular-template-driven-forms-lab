import { Component, OnInit } from "@angular/core";

import * as jsSHA from "jssha";

@Component({
  selector: "app-typed-sha",
  templateUrl: "./typed-sha.component.html",
  styleUrls: ["./typed-sha.component.css"]
})
export class TypedShaComponent implements OnInit {
  hash: String;

  constructor() {}

  ngOnInit() {
    const shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update("This is a test");
    this.hash = shaObj.getHash("HEX");
  }
}
