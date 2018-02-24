import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {

  @Input() amount = 0;
  @Output() amountChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  withdraw() {
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }
}
