import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {FollowingComponent} from "./following/following.component";

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "product-detail", component: ProductDetailComponent},
  {path: "following", component: FollowingComponent},
  {path: "**", component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: "enabled",
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
