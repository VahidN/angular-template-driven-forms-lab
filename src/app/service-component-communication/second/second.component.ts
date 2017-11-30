import { SampleService } from "./../sample.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"]
})
export class SecondComponent implements OnInit, OnDestroy {

  message: string;
  sampleSubscription: Subscription;

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleSubscription = this.sampleService.telecast$.subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.sampleSubscription.unsubscribe();
  }
}
