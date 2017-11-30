import { SampleService } from "./../sample.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"]
})
export class FirstComponent implements OnInit, OnDestroy {

  editedMsg: string;
  sampleSubscription: Subscription;

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleSubscription = this.sampleService.telecast$.subscribe(message => {
      this.editedMsg = message;
    });
  }

  editMsg() {
    this.sampleService.editMsg(this.editedMsg);
  }

  ngOnDestroy() {
    this.sampleSubscription.unsubscribe();
  }
}
