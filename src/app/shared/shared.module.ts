import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ProductComponent} from "./gallery/product/product.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    NavComponent,
    GalleryComponent,
    ProductComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    GalleryComponent,
    ProductComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class SharedModule {
}
