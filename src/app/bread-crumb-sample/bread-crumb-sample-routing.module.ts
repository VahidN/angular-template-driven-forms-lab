import { Parent1Child1Child1Component } from "./parent1-child1-child1/parent1-child1-child1.component";
import { Parent1Child1Component } from "./parent1-child1/parent1-child1.component";
import { Parent1Component } from "./parent1/parent1.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "breadCrumbTest",
    data: { breadcrumb: "Parent1" },
    children: [
      {
        path: "", component: Parent1Component
      },
      {
        path: "Parent1Child1",
        data: { breadcrumb: "Parent1-Child1" },
        children: [
          {
            path: "", component: Parent1Child1Component
          },
          {
            path: "Parent1Child1Child1", component: Parent1Child1Child1Component,
            data: { breadcrumb: "Parent1-Child1 Child1" }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadCrumbSampleRoutingModule { }
