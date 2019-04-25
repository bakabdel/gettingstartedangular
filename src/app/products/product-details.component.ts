import { ProductsService } from "./../products/products.service";
import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./iproduct";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "pm-product-details",
  templateUrl: "product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Iproduct;
  title = "details of product number";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.params["id"];
    this.title += ` ${id}`;
    this._productService
      .getProductById(id)
      .subscribe((product: Iproduct) => (this.product = product));
  }
  onClik() {
    this._router.navigate(["products"]);
  }
}
