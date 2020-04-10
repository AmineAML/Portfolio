import { Component, OnInit, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;

  public displayMobileNav: boolean = false;
  ChangeBackgroundColor: boolean;
  topPosToStartShowing = 100;
  

  constructor() { }

  
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

  ngOnInit(): void {
  }

}
