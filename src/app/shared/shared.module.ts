import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    QuicklinkModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    QuicklinkModule
  ]
})
export class SharedModule { }
