import { Component, OnInit, HostListener, AfterViewInit, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { faFileAlt, faRobot, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';
import { Translation, TRANSLATION, WebsiteLanguage } from "../../i18n/utils";
import { Subject } from 'rxjs';
import { LanguageToggleService } from 'src/app/core/services/language-toggle.service';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-in', //keyframes([
          //style({ transform: 'translateX(50%)', opacity: 0, offset: 0 }),
          //style({ transform: 'translateX(0%)', opacity: 1, offset: 1.0 })
        //]))
        style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', //keyframes([
          //style({ transform: 'translateX(0%)' }),
          //style({ transform: 'translateX(50%)' })
        //]))
        style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('slideOutIn', [
      state('reeeee', style({position: 'relative'}) ),
      transition(':enter', [
        animate('700ms 800ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translate3d(100%, -100%, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('slideOutInG', [
      state('reeee', style({position: 'relative'}) ),
      transition(':enter', [
        animate('700ms 400ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translate3d(100%, -100%, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('slideOutInL', [
      state('reee', style({position: 'relative'}) ),
      transition(':enter', [
        animate('700ms 200ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translate3d(100%, -100%, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('slideOutInS', [
      state('ree', style({position: 'relative'}) ),
      transition(':enter', [
        animate('700ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translate3d(100%, -100%, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ])
  ]
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  faRobot = faRobot;
  faTerminal = faTerminal;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileAlt = faFileAlt;
  faStackOverflow = faStackOverflow;

  isShow: boolean = false;

  topPosToStartShowing = 100;

  //SEO
  name = environment.application.name;
  angular = environment.application.angular;
  material = environment.application.material;
  fontawesome = environment.application.fontawesome;
  aos = environment.application.aos;

  features: any;

  //Translations
  translations = Object.entries(WebsiteLanguage);
  
  constructor(    
    @Inject(TRANSLATION) public readonly lang: Translation,
    private toggleLanguageTranslations: LanguageToggleService) {
      //console.log('Current language is,', lang.language);
    }

  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  percentagevisibilityInViewport = 50;
  //Setting project component's in viewport percentage to 70% that it wouldn't cause any problem with the another component
  percentagevisibilityInViewportProjects = 70;
  //Default value is the home component
  componentInViewport = "h";
  cHome
  cAbout
  cProjects
  cContact
  @HostListener("window:scroll", ['$event'])
  onWebAppScroll(event) {
    if (this.isElementInViewport(this.cHome, this.percentagevisibilityInViewport)) {
      this.componentInViewport = "h";
    }

    if (this.isElementInViewport(this.cAbout, this.percentagevisibilityInViewport)) {
      this.componentInViewport = "a";
    }

    if (this.isElementInViewport(this.cProjects, this.percentagevisibilityInViewportProjects)) {
      this.componentInViewport = "p";
    }

    if (this.isElementInViewport(this.cContact, this.percentagevisibilityInViewport)) {
      this.componentInViewport = "c";
    }
  }

  isElementInViewport(elem, percentVisible) {
    let 
    rect = elem.getBoundingClientRect(),

    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    var isInViewport = (   
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible)

    return !(isInViewport)
  }

  //toggleCmdOpen: boolean;
  toggleCmdOpen: Subject<boolean> = new Subject();
  togCmdOpen = false
  toggleCmd(open: boolean | string) {
    if (this.togCmdOpen === false) {
      this.togCmdOpen = true

      this.toggleCmdOpen.next(true)
    } else {
      this.togCmdOpen = false

      this.toggleCmdOpen.next(false)
    }

    if (open === 'Nein') {
      this.toggleCmdOpen.next(false)
    }
  }

  //toggleChatbotOpen: boolean;
  toggleChatbotOpen: Subject<boolean> = new Subject();
  togChatbotOpen = false
  toggleChatbot(open: boolean | string) {
    if (this.togChatbotOpen === false) {
      this.togChatbotOpen = true

      this.toggleChatbotOpen.next(true)
    } else {
      this.togChatbotOpen = false

      this.toggleChatbotOpen.next(false)
    }

    if (open === 'Nein') {
      this.toggleChatbotOpen.next(false)
    }
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

  heightDivChange = false;
  ngOnInit() {
    //console.log(this.getBrowserName())
    if (this.getBrowserName() === 'firefox') {
      this.heightDivChange = true;
    }

    this.userLanguage();
  }

  ngAfterViewInit() {
    this.cHome = document.getElementById("home");
    this.cAbout = document.getElementById("about");
    this.cProjects = document.getElementById("projects");
    this.cContact = document.getElementById("contact");
  }
}
