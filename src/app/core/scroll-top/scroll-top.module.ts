import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopIndicatorComponent } from './scroll-top-indicator/scroll-top-indicator.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ScrollTopIndicatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ScrollTopIndicatorComponent
  ]
})
export class ScrollTopModule { }
