import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestUrlencodedComponent } from "./test-urlencoded/test-urlencoded.component";

const routes: Routes = [
  { path: "postFormUrlencoded", component: TestUrlencodedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostFormUrlencodedRoutingModule { }
