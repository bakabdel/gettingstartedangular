import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProductGuardGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {
    const id = +next.url[1].path;
    if (!isNaN(id) || id > 0) {
      return true;
    } else {
      alert("invalid ID");
      this._router.navigate(["products"]);
      return false;
    }
  }
}
