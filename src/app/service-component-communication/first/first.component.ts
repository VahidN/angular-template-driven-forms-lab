import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { SampleService } from "./../sample.service";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"]
})
export class FirstComponent implements OnInit, OnDestroy {

  editedMsg: string | null = null;
  sampleSubscription: Subscription | null = null;

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleSubscription = this.sampleService.telecast$.subscribe(message => {
      this.editedMsg = message;
    });
  }

  editMsg() {
    if (this.editedMsg) {
      this.sampleService.editMsg(this.editedMsg);
    }
  }

  ngOnDestroy() {
    if (this.sampleSubscription) {
      this.sampleSubscription.unsubscribe();
    }
  }
}
