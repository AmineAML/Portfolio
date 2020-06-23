import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { SeletonLoaderModule } from 'src/app/core/seleton-loader/seleton-loader.module';
import { ScrollTopModule } from 'src/app/core/scroll-top/scroll-top.module';
import { ConsoleModule } from 'src/app/core/console/console.module';
import { ChatModule } from 'src/app/core/chat/chat.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    WelcomeRoutingModule.components
  ],
  entryComponents: [],
  imports: [
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    SeletonLoaderModule,
    ScrollTopModule,
    ConsoleModule,
    ChatModule,
    WelcomeRoutingModule,
    CommonModule
  ]
})
export class WelcomeModule { }
