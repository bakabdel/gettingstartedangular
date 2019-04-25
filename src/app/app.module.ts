import { WelcomeComponent } from "./home/welcome.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductModule } from "./products/product.module";
const routes: Routes = [
  { path: "home", component: WelcomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  // for template resolution enverinnement
  // here déclare component directive and pipes that we will use in our module class
  // keep in mind that each directive (component too) and pipe muste only declared in on module
  // her only declare : directive (component too) and pipe
  // all directives/components and pipe are privates
  // we share dredctives/components and pipes by exporte them in exports array
  declarations: [AppComponent, WelcomeComponent],
  // import all Module that export the derective/componenet and pipes needed by a classes of this module
  // we can import : Module System, Third party librairies or our Modules
  imports: [
    BrowserModule,
    ProductModule,
    // because we use in application ngIf and ngFor
    RouterModule.forRoot(routes) // to use router => for navigation, ActivatedRoute =>  to snapshot pram from url
  ],
  // exports using to share directives/components and pipes in our module and re-export system Angular module
  // we can export a Module without import it
  // never export a service
  // tslint:disable-next-line:max-line-length
  exports: [], // we can too export the third party librairie like material design and our module if we are other
  bootstrap: [AppComponent], // must be user in root appliction module app.module here , we won't use the bootstrap array in other module
  // be attention all service added here => is enregistred in root not only in a Module ---> be attention
  providers: []
})
export class AppModule {}
