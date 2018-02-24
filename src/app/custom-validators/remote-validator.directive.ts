import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Directive, Input } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Directive({
  selector:
    "[appRemoteValidator][formControlName],[appRemoteValidator][formControl],[appRemoteValidator][ngModel]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: RemoteValidatorDirective,
      multi: true
    }
  ]
})
export class RemoteValidatorDirective implements AsyncValidator {
  @Input("remote-url") remoteUrl: string | null = null;
  @Input("remote-field") remoteField: string | null = null;
  @Input("remote-additional-fields") remoteAdditionalFields: string | null = null;

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<{ [key: string]: any }> {
    if (!this.remoteUrl || this.remoteUrl === undefined) {
      return Observable.throw("`remoteUrl` is undefined.");
    }

    if (!this.remoteField || this.remoteField === undefined) {
      return Observable.throw("`remoteField` is undefined.");
    }

    const dataObject: any = {};
    if (
      this.remoteAdditionalFields &&
      this.remoteAdditionalFields !== undefined
    ) {
      const otherFields = this.remoteAdditionalFields.split(",");
      otherFields.forEach(field => {
        const name = field.trim();
        const otherControl = control.root.get(name);
        if (otherControl) {
          dataObject[name] = otherControl.value;
        }
      });
    }

    // This is used to signal the streams to terminate.
    const changed$ = new Subject<any>();
    changed$.next(); // This will signal the previous stream (if any) to terminate.

    const debounceTime = 400;

    return new Observable((obs: any) => {
      control.valueChanges
        .takeUntil(changed$)
        .take(1)
        .debounceTime(debounceTime)
        .distinctUntilChanged()
        .flatMap(term => {
          if (!this.remoteField || this.remoteField === undefined) {
            return Observable.throw("`remoteField` is undefined.");
          }
          dataObject[this.remoteField] = term;
          return this.doRemoteValidation(dataObject);
        })
        .subscribe(
          (result: IRemoteValidationResult) => {
            if (result.result) {
              obs.next(null);
            } else {
              obs.next({
                remoteValidation: {
                  remoteValidationMessage: result.message
                }
              });
            }

            obs.complete();
          },
          () => {
            obs.next(null);
            obs.complete();
          }
        );
    });
  }

  private doRemoteValidation(data: any): Observable<IRemoteValidationResult> {
    if (!this.remoteUrl || this.remoteUrl === undefined) {
      return Observable.throw("`remoteUrl` is undefined.");
    }

    const headers = new HttpHeaders({ "Content-Type": "application/json" }); // for ASP.NET MVC
    return this.http
      .post<IRemoteValidationResult>(this.remoteUrl, JSON.stringify(data), {
        headers: headers
      })
      .do(result => console.log("remoteValidation result: ", result))
      .catch((error: HttpErrorResponse) => {
        console.error("observable error: ", error);
        return Observable.throw(error.statusText);
      });
  }
}

export interface IRemoteValidationResult {
  result: boolean;
  message: string;
}
