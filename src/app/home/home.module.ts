import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightComponent} from "./highlight/highlight.component";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HighlightComponent,
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule {
}
