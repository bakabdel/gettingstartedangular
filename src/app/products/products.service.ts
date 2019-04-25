import { Iproduct } from "./../products/iproduct";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
@Injectable()
export class ProductsService {
  // products: Iproduct[] = [];
  url = "./api/products/products.json";
  constructor(private _httpClient: HttpClient) {}
  getProducts(): Observable<Iproduct[]> {
    return this._httpClient.get<Iproduct[]>(this.url).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.hanleError)
    );
  }
  getProductById(id: number): Observable<Iproduct | undefined> {
    return this.getProducts().pipe(
      // tslint:disable-next-line:max-line-length
      map((products: Iproduct[]) => products.find(p => p.productId === id)) , tap(productData => console.log(productData)) , catchError(this.hanleError)
    );
  }
  hanleError(err: HttpErrorResponse) {
    let message = "";
    if (err.error instanceof ErrorEvent) {
      message = `${err.error.message}`;
    } else {
      message = `Statut : ${err.status}, Message :  ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
