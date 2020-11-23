import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    PdfRoutingModule.components
  ],
  imports: [
    CommonModule,
    PdfRoutingModule,
    NgxExtendedPdfViewerModule
  ]
})
export class PdfModule { }
