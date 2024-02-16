import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonFormModule} from "./common-form/common-form.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonFormModule
  ],
  exports: [
    CommonFormModule,

  ]
})
export class SharedComponentModule {
}
