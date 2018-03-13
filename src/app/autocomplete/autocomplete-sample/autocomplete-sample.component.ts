import { Component, OnInit } from "@angular/core";
import { debounceTime, distinctUntilChanged, flatMap, switchMap } from "rxjs/operators";
import { Subject } from "rxjs/Subject";

import { SearchService } from "./../search.service";

@Component({
  selector: "app-autocomplete-sample",
  templateUrl: "./autocomplete-sample.component.html",
  styleUrls: ["./autocomplete-sample.component.css"]
})
export class AutocompleteSampleComponent implements OnInit {

  countries1: string[] = [];
  countries2: string[] = [];
  countries3: string[] = [];

  private model1Changed: Subject<string> = new Subject<string>();
  private model2Changed: Subject<string> = new Subject<string>();
  private model3Changed: Subject<string> = new Subject<string>();
  private dueTime = 300;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.model1Changed
      .pipe(
        debounceTime(this.dueTime),
        distinctUntilChanged(),
        flatMap(inputValue => {
          console.log("debounced input value1", inputValue);
          return this.searchService.searchCountries(inputValue);
        })
      )
      .subscribe(countries => {
        this.countries1 = countries;
      });

    this.model2Changed
      .pipe(
        debounceTime(this.dueTime),
        distinctUntilChanged(),
        switchMap(inputValue => {
          console.log("debounced input value2", inputValue);
          return this.searchService.searchCountries(inputValue);
        })
      )
      .subscribe(countries => {
        this.countries2 = countries;
      });

    this.model3Changed
      .pipe(
        debounceTime(this.dueTime),
        distinctUntilChanged()
      )
      .subscribe(inputValue => {
        console.log("debounced input value3", inputValue);
        this.searchService.searchCountries(inputValue).subscribe(countries => {
          this.countries3 = countries;
        });
      });
  }

  onSearch1Change(value: string) {
    this.model1Changed.next(value);
  }

  onSearch2Change(value: string) {
    this.model2Changed.next(value);
  }

  onSearch3Change(value: string) {
    this.model3Changed.next(value);
  }
}
