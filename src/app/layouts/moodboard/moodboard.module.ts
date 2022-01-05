import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoodboardRoutingModule } from './moodboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { VideoDialogModule } from 'src/app/core/video-dialog/video-dialog.module';


@NgModule({
  declarations: [
    MoodboardRoutingModule.components
  ],
  imports: [
    CommonModule,
    MoodboardRoutingModule,
    SharedModule,
    MaterialModule,
    VideoDialogModule
  ]
})
export class MoodboardModule { }
