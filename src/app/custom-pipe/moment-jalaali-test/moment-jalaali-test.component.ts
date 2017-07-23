import { Component, OnInit } from "@angular/core";
import { JsonDatesService } from "./../json-dates.service";

import * as momentJalaali from "moment-jalaali";

@Component({
  selector: "app-moment-jalaali-test",
  templateUrl: "./moment-jalaali-test.component.html",
  styleUrls: ["./moment-jalaali-test.component.css"]
})
export class MomentJalaaliTestComponent implements OnInit {
  now: string;
  nowLongDateFormat: string;
  nowExtraLongDateFormat: string;
  dates: any[] = [];

  constructor(private jsonDatesService: JsonDatesService) {}

  ngOnInit() {
    this.persianDateTests();

    this.jsonDatesService.getDates().subscribe(data => {
      this.dates = data;
    });
  }

  persianDateTests() {
    // https://github.com/jalaali/moment-jalaali
    momentJalaali.loadPersian(/*{ usePersianDigits: true }*/); // نمايش فارسى نام ماه‌ها، روزها و امثال آن

    this.now = momentJalaali().format("jYYYY/jMM/jDD HH:mm");
    this.nowLongDateFormat = momentJalaali().format("jD jMMMM jYYYY [ساعت] LT");
    this.nowExtraLongDateFormat = momentJalaali().format(
      "dddd، jD jMMMM jYYYY [ساعت] LT"
    );
  }
}
