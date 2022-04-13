import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { WebsiteLanguage } from '../../i18n/utils';

export enum LanguageMode {
    FR, EN
}

@Injectable({
    providedIn: 'root'
})
export class LanguageToggleService {

    private readonly LANGUAGE_KEY = 'AA_PORTFOLIO_LANGUAGE';
    private readonly FRENCH_LANGUAGE_VALUE = 'fr';
    private readonly ENGLISH_LANGUAGE_VALUE = 'en';

    private englishLanguageSelected: boolean //= false;
    public language$ = new BehaviorSubject<LanguageMode>(LanguageMode.FR);

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private _router: Router) {

    }

    //Check local storage about selected langauge, if none is selected check the user local language
    public setLanguageOnStart() {
        //Check if user first usage of the web app meaning if first this key doesn't exist and so it return null and define it with the English language code value
        if (localStorage.getItem(this.LANGUAGE_KEY) === null) {
           this.setEnglishLanguage();
        }
    }

    public toggle() {
        if (this.isEnglishLanguageSelected()) {
            this.setFrenchLanguage();
            this._router.navigate(['/' + WebsiteLanguage.French + '/portfolio']);
        } else {
            this.setEnglishLanguage();
            this._router.navigate(['/' + WebsiteLanguage.English + '/portfolio']);
        }
    }
    
    private isEnglishLanguageSelected(): boolean {
        this.englishLanguageSelected = this.storage.get(this.LANGUAGE_KEY) === this.ENGLISH_LANGUAGE_VALUE;
        return this.englishLanguageSelected;
    }

    private setFrenchLanguage() {
        this.storage.set(this.LANGUAGE_KEY, this.FRENCH_LANGUAGE_VALUE);
        document.documentElement.lang = WebsiteLanguage.French;
        this.englishLanguageSelected = false;
        this.language$.next(LanguageMode.FR);
    }

    private setEnglishLanguage() {
        this.storage.set(this.LANGUAGE_KEY, this.ENGLISH_LANGUAGE_VALUE);
        document.documentElement.lang = WebsiteLanguage.English;
        this.englishLanguageSelected = true;
        this.language$.next(LanguageMode.EN);
    }
    
}