import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { SampleService } from "./../sample.service";

@Component({
  selector: "app-third",
  templateUrl: "./third.component.html",
  styleUrls: ["./third.component.css"]
})
export class ThirdComponent implements OnInit, OnDestroy {

  message: string | null = null;
  sampleSubscription: Subscription | null = null;

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
  }

  subscribe() {
    this.sampleSubscription = this.sampleService.telecast$.subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    if (this.sampleSubscription) {
      this.sampleSubscription.unsubscribe();
    }
  }
}
