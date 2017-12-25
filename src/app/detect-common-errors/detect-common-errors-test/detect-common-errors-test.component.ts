import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detect-common-errors-test",
  templateUrl: "./detect-common-errors-test.component.html",
  styleUrls: ["./detect-common-errors-test.component.css"]
})
export class DetectCommonErrorsTestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  /*
  defaultChecks() {
    const author = { firstName: "Vahid", lastName: "N" };
    console.log(author.lastname);
    author.lastName.trimStart();
    author.firstName.charCodeAt("1");
  }
  */

  /*
  getSessionItem(key: string): any {
    const data = window.sessionStorage.getItem(key);
    return JSON.parse(data);
  }
  */

  /*
  // a(null); // error: null is not assignable to string
  a(s: string) {
    console.log(s.length); // ok
  }

  b(s: string | null) {
    console.log(s.length); // error: s is probably 'null'
  }

  c(s?: string) {
    console.log(s.length); // error: s is probably 'undefined'
  }
  */


  /*
  noImplicitReturns(a: number) {
    if (a > 10) {
      return a;
    }
    // No return in this branch
  }
  */

  /*
  allowUnreachableCode() {
    if (false) {
      console.log("Unreachable code");
    }
    const a = 1;
    if (a > 0) {
      return 10; // reachable code
    }
    return 0;
    console.log("Unreachable code");
  }
  */

  /*
    unusedLocals() {
      const a = "foo"; // Error: 'a' is declared but its value is never read
      return "bar";
    }

    unusedParameters(n: number) {
      n = 0; // Never read
    }
  */

  /*
  excessPropertyForObjectLiterals() {
    let x: { foo: number };
    x = { foo: 1, baz: 2 };  // Error, excess property 'baz'
    let y: { foo: number, bar?: number };
    y = { foo: 1, baz: 2 };  // Error, excess property 'baz'
  }
  */


  /*
  noImplicitThis() {
    return this.length; // Error: 'this' implicitly has type 'any' because it does not have a type annotation
  }
  thisExpressionsWithAnImpliedAnyType(this: string[]) {
    return this.length;
  }
  */

  /*
  fallthroughCasesInSwitchStatement(a: number) {
    switch (a) {
      case 0:
        break;

      case 1:
        a += 1;

      case 2:
        a += 2;
        break;
    }
  }
  */

  /*
  indexingObjectsLackingIndexSignatures() {
    const x = { a: 0 };
    x["a"] = 1; // ok
    x["b"] = 1; // Error, type '{ a: number; }' has no index signature.
  }
  */

  /*
  noImplicitAny(args) { // Error: Parameter 'args' implicitly has an 'any' type.
    console.log(args);
  }

  noImplicitAnyArgs(args: string[]) { // ok with the type information
    console.log(args);
  }
  */


}

export interface Animal {
  name: string;
};
export interface Dog extends Animal {
  breed: string;
};

