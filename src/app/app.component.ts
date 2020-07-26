import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { ScullyRoutesService, IdleMonitorService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  imgs = new Array();

  links$: Observable<any> = this.scully.available$;

  ngOnInit(): void {
    AOS.init({
      //disable: 'mobile'
    });
    //Preload images to increase website user experience
    this.pload(
      "./assets/imgs/clouds3.png",
    );
    
    this.consoleGreeting();

    this.links$.subscribe(links => console.log(links))
  }

  pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      //console.log('loaded: ' + args[i]);
    }
  }

  constructor(private scully: ScullyRoutesService, private idle: IdleMonitorService) {}

  consoleGreeting() {
    console.log("    ###         #       #             #       ##     ## ###")
    console.log("   #   #       # #      #            # #      # #   # # ###")
    console.log("    #         #   #     #           #   #     #  # #  # ###")
    console.log("     #       #######    #          #######    #   #   # ###")
    console.log("      #     #       #   #         #       #   #       # ###")
    console.log("   #   #   #         #  #        #         #  #       #")
    console.log("    ###   #           # ####### #           # #       #  #")
    console.log("This website was built by Amine Amellouk and designed with inspiration from others")
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
