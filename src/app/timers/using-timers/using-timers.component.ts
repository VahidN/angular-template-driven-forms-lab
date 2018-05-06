import { Component, OnInit } from "@angular/core";
import { interval, NEVER, Subject, Subscription, timer } from "rxjs";
import { finalize, map, pluck, switchMap, take, takeUntil, timeInterval } from "rxjs/operators";

@Component({
  selector: "app-using-timers",
  templateUrl: "./using-timers.component.html",
  styleUrls: ["./using-timers.component.css"]
})
export class UsingTimersComponent implements OnInit {

  private intervalSubscription: Subscription | null = null;
  intervalValue = 0;
  countdown = 0;

  tick = 0;
  pauser = new Subject();
  tickerSource = new Subject();

  constructor() { }

  ngOnInit() {
    this.testTimeInterval();
    this.testTimeIntervalWithPluck();
  }

  startInterval() {
    const intervalTimer = interval(1000);
    this.intervalSubscription = intervalTimer
      .pipe(
        finalize(() => console.log("All done!"))
      )
      .subscribe(i => this.intervalValue += i);
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  startCountdownTimer() {
    const intervalTimeValue = 1000;
    const duration = 10 * 1000;
    const stream$ = timer(0, intervalTimeValue)
      .pipe(
        finalize(() => console.log("All done!")),
        takeUntil(timer(duration + intervalTimeValue)),
        map(value => duration - value * intervalTimeValue));
    stream$.subscribe(value => this.countdown = value);
  }

  testTimeInterval() {
    const source = timer(0, 1000)
      .pipe(
        timeInterval(),
        map(x => x.value + ":" + x.interval),
        take(5));

    source.subscribe(
      x => console.log("Next timeInterval: " + x),
      err => console.log("Error: " + err),
      () => console.log("Completed")
    );
  }

  testTimeIntervalWithPluck() {
    const source = timer(0, 1000).
      pipe(
        timeInterval(),
        pluck("interval"),
        take(5));

    source.subscribe(
      x => console.log("Next interval: " + x),
      err => console.log("Error: " + err),
      () => console.log("Completed")
    );
  }

  startTicker() {
    timer(0, 1000)
      .subscribe(this.tickerSource);

    this.pauser
      .pipe(
        switchMap(paused => paused ? NEVER : this.tickerSource)
      ).
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
