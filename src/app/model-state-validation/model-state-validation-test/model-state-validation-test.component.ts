import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Movie } from "./../movie";
import { MovieService } from "./../movie.service";

@Component({
  selector: "app-model-state-validation-test",
  templateUrl: "./model-state-validation-test.component.html",
  styleUrls: ["./model-state-validation-test.component.css"]
})
export class ModelStateValidationTestComponent implements OnInit {

  model = new Movie("", "", 0, "");
  successfulSave = false;
  errors: string[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(form);

    this.errors = [];
    this.movieService.postMovieForm(this.model).subscribe(
      (data: Movie) => {
        console.log("Saved data", data);
        this.successfulSave = true;
      },
      (responseError: HttpErrorResponse) => {
        this.successfulSave = false;
        console.log("Response Error", responseError);
        this.processModelStateErrors(form, responseError);
      });
  }

  processModelStateErrors(form: NgForm, responseError: HttpErrorResponse) {
    if (responseError.status === 400) {
      const modelStateErrors = responseError.error;
      for (const fieldName in modelStateErrors) {
        if (modelStateErrors.hasOwnProperty(fieldName)) {
          const modelStateError = modelStateErrors[fieldName];
          const control = form.controls[fieldName] || form.controls[this.lowerCaseFirstLetter(fieldName)];
          console.log({ fieldName: fieldName, modelStateError: modelStateError, control: control });
          if (control) {
            // integrate into Angular's validation
            control.setErrors({
              modelStateError: { error: modelStateError }
            });
          } else {
            // for cross field validations -> show the validation error at the top of the screen
            this.errors.push(modelStateError);
          }
        }
      }
    } else {
      this.errors.push("something went wrong!");
    }
  }

  lowerCaseFirstLetter(data: string): string {
    return data.charAt(0).toLowerCase() + data.slice(1);
  }
}
