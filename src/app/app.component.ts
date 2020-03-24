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
  
//simulate a scroll

  ngOnInit(): void {
    AOS.init({
      disable: 'mobile'
    });
  }

}
