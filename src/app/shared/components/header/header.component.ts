import { Component, OnInit, HostListener, Input, Inject } from '@angular/core';
import { faBars,faTint } from '@fortawesome/free-solid-svg-icons';
import { UiStyleToggleService } from 'src/app/core/ui-style-toggle.service';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() active: string;

  faBars = faBars;
  faTint = faTint;

  public displayMobileNav: boolean = false;
  ChangeBackgroundColor: boolean;
  topPosToStartShowing = 100;
  themeToChange;
  checked;

  //HostListener to know user scrolling top or bottom that top use activeT and bottom use activeB and boolean of isScrollTnotB

  constructor(private toggleLightAndDarkMode: UiStyleToggleService, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  
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
    let userTheme = this.storage.get('THEME');
    if (userTheme == 'DARK') {
      this.themeToChange = "Light mode";
      this.checked = false;
    } else {
      this.themeToChange = "Dark mode";
      this.checked = true;
    }
  }

  ngOnInit(): void {
    this.userThemeMode();
  }

}
