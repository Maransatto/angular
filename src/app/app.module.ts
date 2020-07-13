import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { PageMenuComponent } from './header/page-menu/page-menu.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from './shop/shop-content/shop-content.component';
import { ViewedComponent } from './viewed/viewed.component';
import { BrandsComponent } from './brands/brands.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductComponent } from './product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    HeaderMainComponent,
    MainNavComponent,
    PageMenuComponent,
    ShopComponent,
    ShopSidebarComponent,
    ShopContentComponent,
    ViewedComponent,
    BrandsComponent,
    NewsletterComponent,
    FooterComponent,
    CopyrightComponent,
    ProductItemComponent,
    ProductComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
