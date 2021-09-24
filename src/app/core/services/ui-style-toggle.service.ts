import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

export enum ThemeMode {
    DARK, LIGHT
}

@Injectable({
    providedIn: 'root'
})
//Detect the user's theme
export class UiStyleToggleService {

    private readonly THEME_KEY = 'THEME';
    private readonly DARK_THEME_VALUE = 'DARK';
    private readonly LIGHT_THEME_VALUE = 'LIGHT';
    private readonly DARK_THEME_CLASS_NAME = 'theme-dark';
    private readonly LIGHT_THEME_CLASS_NAME = 'theme-light';

    private darkThemeSelected = false;
    public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

    }

    public setThemeOnStart() {
        if (this.isDarkThemeSelected()) {
            this.setDarkTheme();
        } else {
            this.setLightTheme();
        }
        setTimeout(() => {
            document.body.classList.add('animate-colors-transition');
        }, 500);
    }

    public toggle() {
        if (this.darkThemeSelected) {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
    }
    private isDarkThemeSelected(): boolean {
        this.darkThemeSelected = this.storage.get(this.THEME_KEY) === this.DARK_THEME_VALUE;
        return this.darkThemeSelected;
    }

    private setDarkTheme() {
        this.storage.set(this.THEME_KEY, this.DARK_THEME_VALUE);
        document.body.classList.remove(this.LIGHT_THEME_CLASS_NAME);
        document.body.classList.add(this.DARK_THEME_CLASS_NAME);
        this.darkThemeSelected = true;
        this.theme$.next(ThemeMode.DARK);
    }

    private setLightTheme() {
        this.storage.set(this.THEME_KEY, this.LIGHT_THEME_VALUE);
        document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
        document.body.classList.add(this.LIGHT_THEME_CLASS_NAME);
        this.darkThemeSelected = false;
        this.theme$.next(ThemeMode.LIGHT);
    }
    
}