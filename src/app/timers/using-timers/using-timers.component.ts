import "rxjs/add/observable/interval";
import "rxjs/add/observable/never";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/timeInterval";

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-using-timers",
  templateUrl: "./using-timers.component.html",
  styleUrls: ["./using-timers.component.css"]
})
export class UsingTimersComponent implements OnInit {

  private intervalSubscription: Subscription;
  interval = 0;
  countdown: number;

  tick: number;
  pauser = new Subject();
  tickerSource = new Subject();

  constructor() { }

  ngOnInit() {
    this.testTimeInterval();
    this.testTimeIntervalWithPluck();
  }

  startInterval() {
    const interval = Observable.interval(1000);
    this.intervalSubscription = interval
      .finally(() => console.log("All done!"))
      .subscribe(i => this.interval += i);
  }

  stopInterval() {
    this.intervalSubscription.unsubscribe();
  }

  startCountdownTimer() {
    const interval = 1000;
    const duration = 10 * 1000;
    const stream$ = Observable.timer(0, interval)
      .finally(() => console.log("All done!"))
      .takeUntil(Observable.timer(duration + interval))
      .map(value => duration - value * interval);
    stream$.subscribe(value => this.countdown = value);
  }

  testTimeInterval() {
    const source = Observable.timer(0, 1000)
      .timeInterval()
      .map(x => x.value + ":" + x.interval)
      .take(5);

    source.subscribe(
      x => console.log("Next timeInterval: " + x),
      err => console.log("Error: " + err),
      () => console.log("Completed")
    );
  }

  testTimeIntervalWithPluck() {
    const source = Observable.timer(0, 1000)
      .timeInterval()
      .pluck("interval")
      .take(5);

    source.subscribe(
      x => console.log("Next interval: " + x),
      err => console.log("Error: " + err),
      () => console.log("Completed")
    );
  }

  startTicker() {
    Observable.timer(0, 1000)
      .subscribe(this.tickerSource);

    this.pauser
      .switchMap(paused => paused ? Observable.never() : this.tickerSource).
      subscribe((t: any) => this.tickerFunc(t));

    this.pauser.next(false); // resume
  }

  tickerFunc(tick: number) {
    this.tick = tick;
  }

  pauseTicker() {
    this.pauser.next(true);
  }

  resumeTicker() {
    this.pauser.next(false);
  }
}
