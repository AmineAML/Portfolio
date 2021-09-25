import { Component, OnInit, HostListener, Input, Inject, Output, EventEmitter } from '@angular/core';
import { faBars, faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { UiStyleToggleService } from 'src/app/core/services/ui-style-toggle.service';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { TRANSLATION, Translation, WebsiteLanguage } from 'src/app/i18n/utils';
import { Router } from '@angular/router';
import { LanguageToggleService } from 'src/app/core/services/language-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() active: string;
  @Output() toggleCmd = new EventEmitter();
  @Output() toggleChabot = new EventEmitter();

  faBars = faBars;
  faCloudMoon = faCloudMoon;
  faSun = faSun;

  public displayMobileNav: boolean = false;
  ChangeBackgroundColor: boolean;
  topPosToStartShowing = 100;
  themeToChange;
  checked = true;
  userTheme = this.storage.get('THEME');
  openConsole = true;
  openChatbot = true;

  translations = Object.entries(WebsiteLanguage);


  //HostListener to know user scrolling top or bottom that top use activeT and bottom use activeB and boolean of isScrollTnotB

  constructor(private toggleLightAndDarkMode: UiStyleToggleService, 
    @Inject(LOCAL_STORAGE) private storage: StorageService, 
    @Inject(TRANSLATION) public readonly lang: Translation,
    private _router: Router,
    private toggleLanguageTranslations: LanguageToggleService) { }

  
  //Scroll to the top of the page
  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.ChangeBackgroundColor = true;
    } else {
      this.ChangeBackgroundColor = false;
    }
  }

  /*
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }*/
 
  //Scroll to a section
  goTo(location: string): void {
    window.location.hash = location;

    //Remove the # and whatever after it from the url
    history.replaceState({}, document.title, window.location.hash.split('#')[0]);

    this.closeNav();
  }
  
  openNav() {
    this.displayMobileNav = true;
  }

  closeNav() {
    this.displayMobileNav = false;
  }

  //Slider toggle color by theme
  LightAndDarkMODE() {
    this.toggleLightAndDarkMode.toggle();
    this.userThemeMode();
  }

  userThemeMode() {
    this.userTheme = this.storage.get('THEME');
    console.log(this.userTheme)
    if (this.userTheme == 'DARK') {
      this.themeToChange = this.lang.shared.header.theme.light;
      this.checked = false;
    } else {
      this.themeToChange = this.lang.shared.header.theme.dark;
      this.checked = true;
    }
  }

  toggleConsole() {
    this.displayMobileNav = false;
    this.toggleCmd.emit(this.openConsole);
  }

  toggleChatbot() {
    this.displayMobileNav = false;
    this.toggleChabot.emit(this.openChatbot);
  }

  languageTranslate;
  languageToTranslate;
  toggleLanguage() {
    this.toggleLanguageTranslations.toggle();
  }

  userLanguage() {
    if (this.lang.language == 'English') {
      this.languageTranslate = 'FR';
    } else {
      this.languageTranslate = 'EN';
    }
  }

  ngOnInit(): void {
    this.userThemeMode();
    this.userLanguage();
  }

}
