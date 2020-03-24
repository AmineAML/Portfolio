import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';

  //Animate On Scroll animations
  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event) {
    AOS.refresh();
  }


  @HostListener('window:keydown', ['$event'])
  onDocumentMousewheelEvent2(event) {
    AOS.refresh();
  }

  @HostListener('touchstart', ['$event'])
  onDocumentMousewheelEvent3(event) {
    AOS.refresh();
  }

  @HostListener('touchend', ['$event'])
  onDocumentMousewheelEvent4(event) {
    AOS.refresh();
  }
  
  @HostListener('touchcancel', ['$event'])
  onDocumentMousewheelEvent5(event) {
    AOS.refresh();
  }


  ngOnInit(): void {
    AOS.init({
      //disable: 'mobile'
    });
  }

}
