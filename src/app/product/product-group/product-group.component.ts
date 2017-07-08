import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { ProductItemsService } from "./../product-items.service";

import { Category } from "./../category";
import { Product } from "./../product";
import { ProductGroupForm } from "./../product-group-form";

import { ToastyService, ToastOptions } from "ng2-toasty";

@Component({
  selector: "app-product-group",
  templateUrl: "./product-group.component.html",
  styleUrls: ["./product-group.component.css"]
})
export class ProductGroupComponent implements OnInit {

  categories: Category[] = [];
  products: Product[] = [];
  model = new ProductGroupForm();
  isLoadingProducts = false;

  constructor(
    private productItemsService: ProductItemsService,
    private toastyService: ToastyService) { }

  ngOnInit() {
    this.productItemsService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      err => console.log("get error: ", err)
    );
  }

  fetchProducts(categoryId?: number) {
    console.log(categoryId);

    this.products = [];

    if (categoryId === undefined || categoryId.toString() === "undefined") {
      this.toastyService.error(<ToastOptions>{
        title: "Error!",
        msg: "Please select a category.",
        theme: "bootstrap",
        showClose: true,
        timeout: 5000
      });
      return;
    }

    this.isLoadingProducts = true;
    this.productItemsService.getProducts(categoryId).subscribe(
      data => {
        this.products = data;
        this.isLoadingProducts = false;
      }// ,
      // err => {
      //   console.log("get error: ", err);
      //   this.isLoadingProducts = false;
      // }
    );
  }

  submitForm(form: NgForm) {
    console.log(this.model);
    console.log(form.value);

    // todo: ... post this.model
  }
}
