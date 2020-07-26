import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { StorageServiceModule } from 'ngx-webstorage-service';
import { UiStyleToggleService } from './core/ui-style-toggle.service';
import { LanguageToggleService } from './core/language-toggle.service';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

export function languageFactory(languageService: LanguageToggleService) {
  return () => languageService.setLanguageOnStart();
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
    //ScullyLibModule,
    RouterModule,
    ScullyLibModule.forRoot({ useTransferState: true, alwaysMonitor: true })
  ],
  providers: [
    UiStyleToggleService,
    LanguageToggleService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
    {provide: APP_INITIALIZER, useFactory: languageFactory, deps: [LanguageToggleService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
