import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';


  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event) {
    AOS.refresh();
  }

  @HostListener('touchstart', ['$event'])
  onDocumentTouchstartEvent(event) {
    AOS.refresh();
  }

  @HostListener('touchend', ['$event'])
  onDocumentTouchendEvent(event) {
    AOS.refresh();
  }
  
  @HostListener('touchcancel', ['$event'])
  onDocumentTouchcancelEvent(event) {
    AOS.refresh();
  }

  //Different HostListener examples
  /*
  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event) {
    AOS.refresh();
    console.log('Scrolling')
  }

  @HostListener('window:keydown', ['$event'])
  onDocumentKeydownEvent(event) {
    AOS.refresh();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClickEvent(event) {
    AOS.refresh();
  }
  */


  ngOnInit(): void {
    AOS.init({
      //disable: 'mobile'
    });
  }

}
