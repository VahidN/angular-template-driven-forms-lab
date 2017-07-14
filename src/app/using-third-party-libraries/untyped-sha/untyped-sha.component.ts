import { Component, OnInit } from "@angular/core";

declare var jsSHA: any;

@Component({
  selector: "app-untyped-sha",
  templateUrl: "./untyped-sha.component.html",
  styleUrls: ["./untyped-sha.component.css"]
})
export class UntypedShaComponent implements OnInit {
  hash: String;

  constructor() {}

  ngOnInit() {
    const shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update("This is a test");
    this.hash = shaObj.getHash("HEX");
  }
}
