import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { SampleService } from "./../sample.service";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent implements OnInit, OnDestroy {

  message: string | null = null;
  sampleSubscription: Subscription | null = null;

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
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
