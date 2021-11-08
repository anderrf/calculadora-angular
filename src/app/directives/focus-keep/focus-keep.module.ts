import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusKeepDirective } from './focus-keep.directive';



@NgModule({
  declarations: [
    FocusKeepDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FocusKeepDirective
  ]
})
export class FocusKeepModule { }
