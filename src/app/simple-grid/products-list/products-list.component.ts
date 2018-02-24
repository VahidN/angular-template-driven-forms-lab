import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ToastOptions, ToastyService } from "ng2-toasty";

import { AppProduct } from "./../app-product";
import { GridColumn } from "./../grid-column";
import { PagedQueryModel } from "./../paged-query-model";
import { PagedQueryResult } from "./../paged-query-result";
import { ProductsListService } from "./../products-list.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
  itemsPerPage = [10, 15, 20, 25, 30, 40, 50, 100];
  numberOfPages = 0;
  isLoading = false;
  queryModel = new PagedQueryModel("productId", true, 1, 10, "", "");
  queryResult = new PagedQueryResult<AppProduct>(0, []);
  columns: GridColumn[] = [
    new GridColumn("Id", "productId", true),
    new GridColumn("Name", "productName", true),
    new GridColumn("Price", "price", true),
    new GridColumn("Available", "isAvailable", true)
  ];

  @ViewChild("readOnlyTemplate") readOnlyTemplate: TemplateRef<any> | null = null;
  @ViewChild("editTemplate") editTemplate: TemplateRef<any> | null = null;
  selectedItem: AppProduct | null = null;
  isNewRecord = false;

  constructor(
    private productsService: ProductsListService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.getPagedProductsList();
  }

  private getPagedProductsList() {
    this.isLoading = true;
    this.productsService
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

  sortBy(columnName: string) {
    if (this.queryModel.sortBy === columnName) {
      this.queryModel.isAscending = !this.queryModel.isAscending;
    } else {
      this.queryModel.sortBy = columnName;
      this.queryModel.isAscending = true;
    }
    this.getPagedProductsList();
  }

  editItem(item: AppProduct) {
    console.log(item);
    this.selectedItem = item;
  }

  deleteItem(item: AppProduct) {
    console.log(item);
    this.productsService
      .deleteAppProduct(item.productId)
      .subscribe(response => {
        console.log(response);
        this.toastyService.success(
          <ToastOptions>{
            title: "Success!",
            msg: `${item.productName} has been deleted!`,
            theme: "bootstrap",
            showClose: true,
            timeout: 15000
          }
        );
        this.getPagedProductsList();
      });
  }

  saveItem() {
    console.log(this.selectedItem);
    if (!this.selectedItem) {
      return;
    }

    if (this.isNewRecord) {
      this.productsService
        .addAppProduct(this.selectedItem)
        .subscribe((resp: AppProduct) => {
          if (this.selectedItem) {
            this.selectedItem.productId = resp.productId;

            this.toastyService.success(
              <ToastOptions>{
                title: "Success!",
                msg: `${this.selectedItem.productName} has been added!`,
                theme: "bootstrap",
                showClose: true,
                timeout: 15000
              }
            );
          }

          this.isNewRecord = false;
          this.selectedItem = null;
        });
    } else {
      this.productsService
        .updateAppProduct(this.selectedItem.productId, this.selectedItem)
        .subscribe((resp: AppProduct) => {
          console.log(resp);
          if (this.selectedItem) {
            this.toastyService.success(
              <ToastOptions>{
                title: "Success!",
                msg: `${this.selectedItem.productName} has been updated!`,
                theme: "bootstrap",
                showClose: true,
                timeout: 15000
              }
            );
            this.selectedItem = null;
          }
        });
    }
  }

  cancel() {
    console.log(this.selectedItem);
    this.selectedItem = null;
  }

  addItem() {
    this.selectedItem = new AppProduct(0, "", 0, false);
    this.isNewRecord = true;

    this.queryResult.items.push(this.selectedItem);
    this.queryResult.totalItems++;
  }

  loadTemplate(item: AppProduct) {
    if (this.selectedItem && this.selectedItem.productId === item.productId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  doFilter() {
    this.queryModel.page = 1;
    this.getPagedProductsList();
  }

  resetFilter() {
    this.queryModel.page = 1;
    this.queryModel.filterByColumn = "";
    this.queryModel.filterByValue = "";
    this.getPagedProductsList();
  }

  resetPageSize() {
    this.queryModel.page = 1;
    this.getPagedProductsList();
  }
}
