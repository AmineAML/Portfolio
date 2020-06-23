import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChatService } from "./chat.service";
import { ChatDialogComponent } from "./chat-dialog/chat-dialog.component";
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ChatDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ChatDialogComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
