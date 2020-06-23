import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

export enum ThemeMode {
    DARK, LIGHT
}

@Injectable({
    providedIn: 'root'
})
export class UiStyleToggleService {

    private readonly THEME_KEY = 'THEME';
    private readonly DARK_THEME_VALUE = 'DARK';
    private readonly LIGHT_THEME_VALUE = 'LIGHT';
    private readonly DARK_THEME_CLASS_NAME = 'theme-dark';
    private readonly LIGHT_THEME_CLASS_NAME = 'theme-light';

    private lightThemeSelected = false;
    public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.DARK);

    /*, private analyticsService: AnalyticsService*/
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

    }

    public setThemeOnStart() {
        if (this.islightThemeSelected()) {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
        setTimeout(() => {
            document.body.classList.add('animate-colors-transition');
        }, 500);
    }

    public toggle() {
        if (this.lightThemeSelected) {
            this.setDarkTheme();
        } else {
            this.setLightTheme();
        }
    }
    private islightThemeSelected(): boolean {
        this.lightThemeSelected = this.storage.get(this.THEME_KEY) === this.LIGHT_THEME_VALUE;
        return this.lightThemeSelected;
    }

    private setDarkTheme() {
        this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
        document.body.classList.remove(this.LIGHT_THEME_CLASS_NAME);
        document.body.classList.add(this.DARK_THEME_CLASS_NAME);
        this.lightThemeSelected = false;
        this.theme$.next(ThemeMode.DARK);
        //this.analyticsService.pushEvent({action: 'ThemeChanged', value: this.DARK_THEME_VALUE});
    }

    private setLightTheme() {
        this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
        document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
        document.body.classList.add(this.LIGHT_THEME_CLASS_NAME);
        this.lightThemeSelected = true;
        this.theme$.next(ThemeMode.LIGHT);
        //this.analyticsService.pushEvent({action: 'ThemeChanged', value: this.LIGHT_THEME_VALUE});
    }
    
}