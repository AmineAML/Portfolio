import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ResumeModule { }
