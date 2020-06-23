import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { StorageServiceModule } from 'ngx-webstorage-service';
import { UiStyleToggleService } from './core/ui-style-toggle.service';

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, //SharedModule does import and export QuicklinkStrategy
    BrowserAnimationsModule,
    HttpClientModule,
    StorageServiceModule,
  ],
  providers: [
    UiStyleToggleService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
