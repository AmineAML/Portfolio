import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ErrorRoutingModule } from './error-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ErrorRoutingModule.components
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ErrorRoutingModule,
    CommonModule
  ]
})
export class ErrorModule { }
