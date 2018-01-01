import { Component, OnInit } from "@angular/core";

import { Person } from "./../person";

@Component({
  selector: "app-linq-tests",
  templateUrl: "./linq-tests.component.html",
  styleUrls: ["./linq-tests.component.css"]
})
export class LinqTestsComponent implements OnInit {

  people: Person[] = [
    { name: "User 4", age: 27 },
    { name: "User 5", age: 42 },
    { name: "User 6", age: 8 },
    { name: "User 1", age: 20 },
    { name: "User 2", age: 35 },
    { name: "User 3", age: 78 }
  ];

  constructor() {
  }

  ngOnInit() {
    this.equivalentToWhere();
    this.equivalentToContains();
    this.equivalentToFirstOrDefault();
    this.equivalentToFindIndex();
    this.equivalentToSelect();
    this.equivalentToAll();
    this.equivalentToAny();
    this.equivalentToAggregate();
    this.equivalentToForEach();
    this.equivalentToOrderBy();
    this.chainFunctionCalls();
    this.equivalentToSkip();
  }

  logTitle(title: string) {
    console.log(`%c${title}`, "background: #222; color: #bada55");
  }

  logOriginalArray() {
    console.log(`original this.people:${JSON.stringify(this.people)}`);
  }

  logResult(message: string, result: any) {
    console.log(`${message}:${JSON.stringify(result)}`);
  }

  equivalentToWhere() {
    this.logTitle("equivalentToWhere");

    const youngerThan40 = this.people.filter(person => person.age < 40); // ECMAScript 5
    this.logResult("People younger than 40", youngerThan40);


    // Filtering on Multiple Criteria
    const youngsters = this.people.filter(
      person => person.age < 40 && person.name.toLocaleLowerCase().indexOf("user") !== -1);
    this.logResult("Users younger than 40", youngsters);
    this.logOriginalArray();
  }

  equivalentToContains() {
    this.logTitle("equivalentToContains");

    const searchElement: Person = { name: "User 4", age: 27 };
    const containsUser4 = this.people.includes(searchElement); // ECMAScript 2016 = ECMAScript 7
    this.logResult("Contains searchElement", containsUser4); // false -> only compares by reference and not by value.

    const indexOfUser4 = this.people.indexOf(searchElement); // ECMAScript 5
    this.logResult("indexOfUser4", indexOfUser4); // -1 -> only compares by reference and not by value.

    const stringifiedObj = JSON.stringify(searchElement);
    const includesUser4 = this.people.some(person => JSON.stringify(person) === stringifiedObj);
    this.logResult("includesUser4", includesUser4); // true -> compares by by value.
  }

  equivalentToFirstOrDefault() {
    this.logTitle("equivalentToFirstOrDefault");

    const vahidOrDefault = this.people.filter(item => item.name === "Vahid")[0] || null; // ECMAScript 5
    this.logResult("vahidOrDefault", vahidOrDefault);
    this.logOriginalArray();

    const user1OrDefault = this.people.find(item => item.name === "User 1") || null; // ECMAScript 2015 = ECMAScript 6
    this.logResult("user1OrDefault", user1OrDefault);
    this.logOriginalArray();
  }

  equivalentToFindIndex() {
    this.logTitle("equivalentToFindIndex");

    const index = this.people.findIndex(person => person.age === 8); // ECMAScript 2015 = ECMAScript 6
    this.logResult("index of the user with age 8", index)
  }

  equivalentToSelect() {
    this.logTitle("equivalentToSelect");

    const names = this.people.map(person => person.name); // ECMAScript 5
    this.logResult("Selected the names of people", names);
    this.logOriginalArray();
  }

  equivalentToAll() {
    this.logTitle("equivalentToAll");

    const allUnder30 = this.people.every(person => person.age < 30); // ECMAScript 5
    this.logResult("Are all people under 30?", allUnder30); // false
  }

  equivalentToAny() {
    this.logTitle("equivalentToAny");

    const anyUnder40 = this.people.some(person => person.age < 40); // ECMAScript 5
    this.logResult("Are any people under 40?", anyUnder40); // true

    // Filtering on Criteria Matching any Object Properties
    const filterBy = "user";
    const anyUsers = this.people.filter(person =>
      Object.keys(person).some(property => {
        let value = (<any>person)[property];
        if (typeof value === "string") {
          value = value.toLocaleLowerCase();
        }
        return value.toString().indexOf(filterBy) !== -1;
      })
    );
    this.logResult("anyUsers", anyUsers);
    this.logOriginalArray();
  }

  equivalentToAggregate() {
    this.logTitle("equivalentToAggregate");

    // ECMAScript 5
    const aggregate = this.people.reduce((person1, person2) => {
      return { name: "", age: person1.age + person2.age };
    });
    this.logResult("Aggregate age", aggregate.age); // { age: 210 }
    this.logOriginalArray();
  }

  equivalentToForEach() {
    this.logTitle("equivalentToForEach");

    // ECMAScript 5
    this.people.forEach(person => {
      this.logResult("person", person);
    });
  }

  equivalentToOrderBy() {
    this.logTitle("equivalentToOrderBy");

    // ECMAScript 5
    let orderedByAgeAscending = this.people.sort((person1, person2) => {
      const a = person1.age;
      const b = person2.age;
      return a > b ? 1 : -1;
    });
    this.logResult("Ordered by age ascending", orderedByAgeAscending);

    orderedByAgeAscending = this.people.sort((person1, person2) => person1.age - person2.age);
    this.logResult("Ordered by age ascending", orderedByAgeAscending);
    this.logOriginalArray();

    /*
    If the return value of the compare function is:
    - less than 0 — a comes before b
    - greater than 0  — b comes before a
    - equal to 0  — a and b are left unchanged with respect to each other
    */

    const orderedByName = this.people.sort((person1, person2) => {
      // name1.localeCompare(name2) // is case insensitive
      // or use toUpperCase() to ignore character casing
      const name1 = person1.name.toUpperCase();
      const name2 = person2.name.toUpperCase();
      return name1 > name2 ? 1 : -1;
    })
    this.logResult("Ordered by name", orderedByName);
    this.logOriginalArray();
  }

  chainFunctionCalls() {
    this.logTitle("chainFunctionCalls");

    const namesOfPeopleOver30OrderedDesc =
      this.people
        .filter(person => person.age > 30)
        .map(person => person.name)
        .sort((name1, name2) => {
          // name1.localeCompare(name2) // is case insensitive
          // or use toUpperCase() to ignore character casing
          name1 = name1.toUpperCase();
          name2 = name2.toUpperCase();
          return name2 > name1 ? 1 : -1;
        });
    this.logResult("the names of all people over 30 ordered by name descending", namesOfPeopleOver30OrderedDesc);
    this.logOriginalArray();
  }

  equivalentToSkip() {
    this.logTitle("equivalentToSkip");

    this.logOriginalArray();
    const skip2 = this.people.splice(2); // ECMAScript 5
    this.logResult("skip2 -> the deleted elements", skip2);
    this.logOriginalArray();
  }
}
