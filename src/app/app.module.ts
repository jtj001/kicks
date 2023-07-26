import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {ProductsModule} from "./products/products.module";
import {ContactModule} from "./contact/contact.module";
import {AccountModule} from "./account/account.module";
import {AboutModule} from "./about/about.module";
import {SharedModule} from "./shared/shared.module";
import {CartModule} from "./cart/cart.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    ContactModule,
    AccountModule,
    AboutModule,
    SharedModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
