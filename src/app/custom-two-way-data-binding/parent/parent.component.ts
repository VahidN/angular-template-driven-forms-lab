import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {

  amount = 500;

  constructor() { }

  ngOnInit() {
  }

  deposit() {
    this.amount += 100;
  }
}
