import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

import { ProductsListService } from "./../products-list.service";
import { PagedQueryModel } from "./../paged-query-model";
import { PagedQueryResult } from "./../paged-query-result";
import { AppProduct } from "./../app-product";
import { GridColumn } from "./../grid-column";

import { ToastyService, ToastOptions } from "ng2-toasty";

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

  @ViewChild("readOnlyTemplate") readOnlyTemplate: TemplateRef<any>;
  @ViewChild("editTemplate") editTemplate: TemplateRef<any>;
  selectedItem: AppProduct;
  isNewRecord: boolean;

  constructor(
    private productsService: ProductsListService,
    private toastyService: ToastyService
  ) {}

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

  sortBy(columnName) {
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

    if (this.isNewRecord) {
      this.productsService
        .addAppProduct(this.selectedItem)
        .subscribe((resp: AppProduct) => {
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

          this.isNewRecord = false;
          this.selectedItem = null;
        });
    } else {
      this.productsService
        .updateAppProduct(this.selectedItem.productId, this.selectedItem)
        .subscribe((resp: AppProduct) => {
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
}
