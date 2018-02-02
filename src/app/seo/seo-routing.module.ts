import { SeoTestsComponent } from "./seo-tests/seo-tests.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "seo", component: SeoTestsComponent,
    data: {
      title: "SeoTestsComponent Title",
      metaTags: {
        description: "SeoTestsComponent Description or some content here",
        keywords: "seo, some, keywords, here, separated, by, a comma"
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoRoutingModule { }
