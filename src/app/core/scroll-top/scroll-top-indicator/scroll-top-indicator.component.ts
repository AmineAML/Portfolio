import { Component, OnInit, HostListener } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-top-indicator',
  templateUrl: './scroll-top-indicator.component.html',
  styleUrls: ['./scroll-top-indicator.component.scss']
})
export class ScrollTopIndicatorComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  faAngleUp = faAngleUp;

  constructor() { }

  //Scroll to the top of the page
  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
  }

}
