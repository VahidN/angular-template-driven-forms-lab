import { SampleService } from "./../sample.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-third",
  templateUrl: "./third.component.html",
  styleUrls: ["./third.component.css"]
})
export class ThirdComponent implements OnInit, OnDestroy {

  message: string;
  sampleSubscription: Subscription;

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
