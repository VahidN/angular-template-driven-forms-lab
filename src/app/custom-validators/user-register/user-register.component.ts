import { NgForm } from "@angular/forms";
import { User } from "./../user";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.css"]
})
export class UserRegisterComponent implements OnInit {
  remoteUsernameValidationUrl = "api/Employee/CheckUser";
  model = new User();

  constructor() {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    console.log(this.model);
    console.log(form.value);
  }
}
