import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Employee } from "app/employee/employee";
import { FormPosterService } from "../form-poster.service";

@Component({
  selector: "app-employee-register",
  templateUrl: "./employee-register.component.html",
  styleUrls: ["./employee-register.component.css"]
})
export class EmployeeRegisterComponent implements OnInit {
  languages = [];
  model = new Employee("Vahid", "N", true, "FullTime", "default");
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPosterService) {}

  ngOnInit() {
    this.formPoster.getLanguages().subscribe(
      data => {
        this.languages = data;
      },
      err => console.log("get error: ", err)
    );
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  validatePrimaryLanguage(value) {
    if (value === "default") {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }

  submitForm(form: NgForm) {
    console.log(this.model);
    console.log(form.value);

    // validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) {
      return;
    }

    this.formPoster
      .postEmployeeForm(this.model)
      .subscribe(
        data => console.log("success: ", data),
        err => console.log("error: ", err)
      );
  }
}
