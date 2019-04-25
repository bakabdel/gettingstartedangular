import { SharedModule } from "./../shared/shared.module";
import { ProductsService } from "./products.service";
import { ProductGuardGuard } from "./product-guard.guard";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductListComponent } from "./product-list.component";
import { NgModule } from "@angular/core";
import { TransformToSpacePipe } from "../shared/transform-to-space.pipe";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "products/:id",
    canActivate: [ProductGuardGuard],
    component: ProductDetailsComponent
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    TransformToSpacePipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ProductsService, ProductGuardGuard]
})
export class ProductModule {}
