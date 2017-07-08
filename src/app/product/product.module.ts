import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductGroupComponent } from "./product-group/product-group.component";
import { ProductItemsService } from "./product-items.service";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  declarations: [ProductGroupComponent],
  providers: [ProductItemsService]
})
export class ProductModule { }
