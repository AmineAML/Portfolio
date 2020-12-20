import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { CanonicalService } from './core/services/canonical.service';
import { MetaService } from './core/services/meta.service';

const resetRoute = [
  style({ position: 'relative' }),
  query(
      ':enter, :leave',
    [
        style({
              position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
              top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
              left: 0,
              width: '100%',
              opacity: 0,
          }),
    ],
    { optional: true }
  ),
];

const slideLeft = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0 ,transform: 'translate3d(0%,0,0)' }), {optional:true}),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }), {optional:true}),
  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
    ]), {optional:true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional:true})
  ])
]

const slideInAnimation =
  trigger('routeAnimation', [
    transition('welcome <=> resume', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
      query(':leave', [
        animate('20000ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('21000ms ease-out', style({ left: '0%' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

const slideAnimation =
  trigger('routeAnimation', [
    transition("welcome <=> resume", [
      query(
        ":enter, :leave",
        style({ position: "fixed", left: 8, right: 0, top: 72, bottom: 0 }),
      { optional: true }
    ),
    query(":leave", style({ transform: "Y(0%)" }), { optional: true }),
    query(":enter", style({ transform: "translateY(100%)" }), {
      optional: true
    }),
    group([
      query(
        ":leave",
        [animate(".5s ease-in-out", style({ transform: "translateY(-100%)" }))],
        { optional: true }
      ),
      query(
        ":enter",
        [animate(".5s ease-in-out", style({ transform: "translateY(0%)" }))],
        { optional: true }
      )
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideAnimation
  ]
})
export class AppComponent implements OnInit {
  
  imgs = new Array();

  ngOnInit(): void {
    AOS.init({
      //disable: 'mobile'
    });
    //Preload images to increase website user experience
    /*this.pload(
      "./assets/imgs/clouds3.png",
    );
    */
    
    this.consoleGreeting();

    this.canonicalService.setCanonicalURL();

    //this.localError()
  }

  pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      //console.log('loaded: ' + args[i]);
    }
  }

  constructor(private canonicalService: CanonicalService, private metaService: MetaService) {
    this.metaService.updateMetaData();
  }

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

  prepareRoute(outlet: RouterOutlet) {
    /*return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
    */
   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  localError() {
    throw Error("The app component has thrown an error!");
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
