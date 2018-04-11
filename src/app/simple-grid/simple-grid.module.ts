import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
import { PaginationModule } from "ngx-bootstrap";

import { ProductsListService } from "./products-list.service";
import { ProductsListComponent } from "./products-list/products-list.component";
import { SimpleGridRoutingModule } from "./simple-grid-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PaginationModule.forRoot(),
    SimpleGridRoutingModule
  ],
  declarations: [ProductsListComponent],
  providers: [ProductsListService]
})
export class SimpleGridModule { }
