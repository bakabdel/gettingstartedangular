import { ProductsService } from "./products.service";
import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./iproduct";

@Component({
  // selector: "pm-listproducts",
  templateUrl: "./product-list.component.html",
  styleUrls: ["product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  title = " Products list";
  // normaly this must be get from cookies or a dababase or some thing else
  _filter = "cart";
  set filter(value: string) {
    this._filter = value;
    this.filtredProducts = this.filter
      ? this.filterProducts(this.filter)
      : this.products;
  }
  get filter(): string {
    return this._filter;
  }
  isImageShowing = false;
  imagWidth = "60px";
  imageMargin = "5px";
  products: Iproduct[] = [];
  filtredProducts: Iproduct[];
  constructor(private _productsService: ProductsService) {}
  togglmage(): void {
    this.isImageShowing = !this.isImageShowing;
  }
  ngOnInit(): void {
    // this.products = this._productsService.getProducts();
    console.log(" data from http service status :");
    // console.log(this._productsService.getProducts());
    this._productsService.getProducts().subscribe(data => {
      this.products = data;
      this.filtredProducts = this.products;
    });

    this.filter = "";
  }
  // this function must return a filted table
  filterProducts(filter: string) {
    filter = filter.toLocaleLowerCase();
    return this.products.filter(
      (product: Iproduct) =>
        product.productName.toLocaleLowerCase().indexOf(filter) !== -1
    );
  }
  onRecupered(value: string) {
    this.title = value;
  }
}
