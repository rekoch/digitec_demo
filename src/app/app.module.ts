import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './shared/components/search/search.component';
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ProductIconsComponent } from './shared/components/product-icons/product-icons.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DailyOfferComponent } from './daily-offer/daily-offer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPlacementComponent } from './shared/components/product-placement/product-placement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    LanguageSwitcherComponent,
    ButtonComponent,
    ProductIconsComponent,
    SideNavigationComponent,
    DailyOfferComponent,
    MainPageComponent,
    ProductPlacementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
