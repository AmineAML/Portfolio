import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAvailableRoutingModule } from './not-available-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    NotAvailableRoutingModule.components
  ],
  imports: [
    CommonModule,
    NotAvailableRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class NotAvailableModule { }
