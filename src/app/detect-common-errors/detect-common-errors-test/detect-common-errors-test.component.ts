import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detect-common-errors-test",
  templateUrl: "./detect-common-errors-test.component.html",
  styleUrls: ["./detect-common-errors-test.component.css"]
})
export class DetectCommonErrorsTestComponent implements OnInit {

  // zzz: Nullable<User>;

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

  // let foo: string = null; // Error!
  // let foo: string | null = null; // Okay!

  /*
  testAssignedBeforeUseChecking() {
    let x: number;
    console.log(x);

    let z: number | undefined;
    console.log(z);
  }*/

  /*
  testOptionalParametersAndProperties1(x?: number) {
  }

  testOptionalParametersAndProperties2(x?: number | undefined): void {

  }
*/

  /*
    f(x: number): string {
      return x.toString();
    }

    testTypeGuards() {
      let x: number | null | undefined;
      if (x) {
        this.f(x);  // Ok, type of x is number here
      } else {
        this.f(x);  // Error, type of x is number? here
      }
    }
  */

  /*
  foo(options?: Options) {
    if (options && options.location && options.location.x) {
      const x = options.location.x;  // Type of x is number
    }
  }*/

  /*
  printUserInfo(user: User) {
    console.log(`${user.name}, ${user.age.toString()}`);
    // => error TS2532: Object is possibly 'undefined'.
    console.log(`${user.name}, ${user.age!.toString()}`);
    // => OK, you confirm that you're sure user.age is non-null.
    if (user.age != null) {
      console.log(`${user.name}, ${user.age.toString()}`);
    }
    // => OK, the if-condition checked that user.age is non-null.
    console.log(user.name + ", " + user.age ? user.age.toString() : "age unknown");
    // => Unfortunately TypeScript can't infer that age is non-null here.
  }

  getLength(s: string | null) {
    return s ? s.length : 0;
  }

  getLength2(s?: string) {
    return s ? s.length : 0;
  }*/

  /*
  isNumber(n: any): n is number { // type guard
    return typeof n === "number";
  }

  usedMb(usedBytes?: number): number | undefined {
    return this.isNumber(usedBytes) ? (usedBytes / (1024 * 1024)) : undefined;
  }

  usedMb2(usedBytes?: number): number | undefined {
    return usedBytes ? (usedBytes / (1024 * 1024)) : undefined;
  }

  formatUsedMb(): string {
    //ERROR: TS2531: Object is possibly undefined
    return this.usedMb(123).toFixed(0).toString();
  }

  formatUsed(): string {
    const usedMb = this.usedMb(123);
    return usedMb ? usedMb.toFixed(0).toString() : "";
  }
  */

}

export interface User {
  name: string;
  age?: number;
}


export interface Options {
  location?: {
    x?: number;
    y?: number;
  };
}

export type Nullable<T> = T | null;

export interface Animal {
  name: string;
};
export interface Dog extends Animal {
  breed: string;
};

