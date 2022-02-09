import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { StorageServiceModule } from 'ngx-webstorage-service';
import { UiStyleToggleService } from './core/services/ui-style-toggle.service';
import { LanguageToggleService } from './core/services/language-toggle.service';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ErrorModule } from './layouts/error/error.module';
import { GlobalErrorHandler } from './core/errors/global-error-handler';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ScullyLibModule.forRoot({ useTransferState: true, alwaysMonitor: true }),
    ErrorModule,
    ServiceWorkerModule.register('ngsw-config.js', { enabled: environment.production }),
    ScullyLibModule,
  ],
  providers: [
    UiStyleToggleService,
    LanguageToggleService,
    Meta,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
    {provide: APP_INITIALIZER, useFactory: languageFactory, deps: [LanguageToggleService], multi: true},
    {
      // proccess all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
