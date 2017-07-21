import { Component, OnInit } from "@angular/core";

import { ProductsListService } from "./../products-list.service";
import { PagedQueryModel } from "./../paged-query-model";
import { PagedQueryResult } from "./../paged-query-result";
import { AppProduct } from "./../app-product";
import { GridColumn } from "./../grid-column";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
  itemsPerPage = 7;
  currentPage: number;
  numberOfPages: number;
  isLoading = false;
  queryModel = new PagedQueryModel("productId", true, 1, this.itemsPerPage);
  queryResult = new PagedQueryResult<AppProduct>(0, []);
  columns: GridColumn[] = [
    new GridColumn("Id", "productId", true),
    new GridColumn("Name", "productName", true),
    new GridColumn("Price", "price", true),
    new GridColumn("Available", "isAvailable", true)
  ];

  constructor(private productsListService: ProductsListService) {}

  ngOnInit() {
    this.getPagedProductsList();
  }

  private getPagedProductsList() {
    this.isLoading = true;
    this.productsListService
      .getPagedProductsList(this.queryModel)
      .subscribe(result => {
        this.queryResult = result;
        this.isLoading = false;
      });
  }

  onPageChange(event: any) {
    this.queryModel.page = event.page;
    this.getPagedProductsList();
  }

  sortBy(columnName) {
    if (this.queryModel.sortBy === columnName) {
      this.queryModel.isAscending = !this.queryModel.isAscending;
    } else {
      this.queryModel.sortBy = columnName;
      this.queryModel.isAscending = true;
    }
    this.getPagedProductsList();
  }
}
