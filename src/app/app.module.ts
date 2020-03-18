import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './layouts/welcome/welcome.module';
import { RouterModule } from '@angular/router';
import { ErrorModule } from './layouts/error/error.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    WelcomeModule,
    ErrorModule,
    RouterModule,
    BrowserAnimationsModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
