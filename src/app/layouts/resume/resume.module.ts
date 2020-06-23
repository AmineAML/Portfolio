import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ResumeRoutingModule.components
  ],
  imports: [
    MaterialModule,
    ResumeRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ResumeModule { }
