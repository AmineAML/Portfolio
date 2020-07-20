import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiRoutingModule } from './hi-routing.module';



@NgModule({
  declarations: [
    HiRoutingModule.components
  ],
  imports: [
    CommonModule,
    HiRoutingModule
  ]
})
export class HiModule { }
