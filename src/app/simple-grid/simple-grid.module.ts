import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SimpleGridRoutingModule } from "./simple-grid-routing.module";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsListService } from "./products-list.service";

import { PaginationModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    SimpleGridRoutingModule
  ],
  declarations: [ProductsListComponent],
  providers: [ProductsListService]
})
export class SimpleGridModule {}
