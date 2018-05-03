import { Component, OnInit } from "@angular/core";

import { UrlencodedService } from "./../urlencoded.service";

@Component({
  selector: "app-test-urlencoded",
  templateUrl: "./test-urlencoded.component.html",
  styleUrls: ["./test-urlencoded.component.css"]
})
export class TestUrlencodedComponent implements OnInit {

  constructor(private urlencodedService: UrlencodedService) { }

  ngOnInit() {
    this.urlencodedService.doRefreshToken("aaa-bbbb-cccc rrr")
      .subscribe(result => {
        console.log("RefreshToken Result", result);
      });
  }

}
