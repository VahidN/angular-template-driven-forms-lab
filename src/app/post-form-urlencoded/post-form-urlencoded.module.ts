import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PostFormUrlencodedRoutingModule } from "./post-form-urlencoded-routing.module";
import { TestUrlencodedComponent } from "./test-urlencoded/test-urlencoded.component";
import { UrlencodedService } from "./urlencoded.service";

@NgModule({
  imports: [
    CommonModule,
    PostFormUrlencodedRoutingModule
  ],
  declarations: [TestUrlencodedComponent],
  providers: [UrlencodedService]
})
export class PostFormUrlencodedModule { }
