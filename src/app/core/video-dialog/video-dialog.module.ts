import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SeletonLoaderModule } from '../seleton-loader/seleton-loader.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VideoDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SeletonLoaderModule,
    FormsModule
  ],
  exports: [
    VideoDialogComponent
  ]
})
export class VideoDialogModule { }
