import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  imgs = new Array();

  ngOnInit(): void {
    AOS.init({
      //disable: 'mobile'
    });
    //Preload images to increase website user experience
    this.pload(
      "./assets/imgs/clouds3.png",
      "./assets/imgs/Portfolio icon.png",
      "./assets/imgs/projects-gifs/CubeSolvesTimer.gif",
      "./assets/imgs/projects-gifs/LocaIT.gif",
      "./assets/imgs/projects-gifs/NoteTaker.gif");
  }

  pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      //console.log('loaded: ' + args[i]);
    }
  }

  /*
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

}
