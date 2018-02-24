import { Component, OnInit } from "@angular/core";

import { IP } from "./../ip";
import { JobService } from "./../job.service";

@Component({
  selector: "app-get-ip",
  templateUrl: "./get-ip.component.html",
  styleUrls: ["./get-ip.component.css"]
})
export class GetIpComponent implements OnInit {

  clientIp: IP | null = null;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getIpAddress().subscribe(data => {
      this.clientIp = data;
      console.log(data);
    });
  }

}
