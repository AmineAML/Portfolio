import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';
import { AnimationOptions } from 'ngx-lottie';
import { TRANSLATION, Translation } from 'src/app/i18n/utils';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateY(0%)' }))
      ])
    ]),
    trigger('slideOutIn', [
      state('*', style({position: 'relative'}) ),
      transition(':leave', [
        animate('700ms 800ms ease-out', keyframes([
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 0, transform: 'translate3d(-100%, 100%, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('slideOutInG', [
      state('*', style({position: 'relative'}) ),
      transition(':leave', [
        animate('700ms 400ms ease-out', keyframes([
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 0, transform: 'translate3d(-90%, 110%, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('slideOutInL', [
      state('*', style({position: 'relative'}) ),
      transition(':leave', [
        animate('700ms 200ms ease-out', keyframes([
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 0, transform: 'translate3d(-80%, 120%, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ]),
    trigger('slideOutInS', [
      state('*', style({position: 'relative'}) ),
      transition(':leave', [
        animate('700ms ease-out', keyframes([
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', position: 'absolute', offset: 0 }),
          style({ opacity: 0, transform: 'translate3d(-80%, 130%, 0)', position: 'absolute', offset: 1 }),
        ]))
      ]),
    ])
  ]
})
export class HeroComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileAlt = faFileAlt;
  faStackOverflow = faStackOverflow;

  public g = false
  public l = false
  public s = false

  isShow: boolean = true;

  topPosToStartShowing = 100;

  //Hide and show the sign of typing
  public typingSign = true;
  public typingSign2 = false;

  //Hide and Show icons and the scroll indicator
  public HideShow = false;

  // Change color or last name
  highlightStart = 6;
  highlightLength = 14;

  //Typing animation
  public typewriter_text: string //= "Amine AMELLOUK";
  public typewriter_display: string = "";

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    }
  }

  //public typewriter_text2: string = "Software Engineer";
  public typewriter_text2: string;
  public typewriter_text2_pretitle: string;
  public typewriter_text2_anotherpretitle: string;
  public typewriter_display2: string = "";

  typingCallback2(that, title) {
    let total_length = that.typewriter_text2_pretitle.length;
    let current_length = that.typewriter_display2.length;
    if (title === 'p') {
      if (current_length < total_length) {
        that.typewriter_display2 += that.typewriter_text2_pretitle[current_length];
        setTimeout(that.typingCallback2, 20, that, title);
      } else {
        title = 'rem_p'
        setTimeout(that.typingCallback2, 100, that, title)
      }
    } else if (title === 'rem_p') {
      current_length = that.typewriter_display2.length;
      if (current_length !== 0) {
        that.typewriter_display2 = that.typewriter_display2.slice(0, -1);
        //title = 'rem_p'
        setTimeout(that.typingCallback2, 20, that, title);
      } else {
        title = 'a'
        setTimeout(that.typingCallback2, 100, that, title);
      }
    } else if (title === 'a') {
      total_length = that.typewriter_text2_anotherpretitle.length;
      current_length = that.typewriter_display2.length;
      if (current_length < total_length) {
        that.typewriter_display2 += that.typewriter_text2_anotherpretitle[current_length];
        setTimeout(that.typingCallback2, 20, that, title);
      } else {
        title = 'rem_t'
        setTimeout(that.typingCallback2, 100, that, title)
      }
    } else if (title === 'rem_t') {
      current_length = that.typewriter_display2.length;
      if (current_length !== 0) {
        that.typewriter_display2 = that.typewriter_display2.slice(0, -1);
        setTimeout(that.typingCallback2, 20, that, title);
      } else {
        title = 't'
        setTimeout(that.typingCallback2, 100, that, title);
      }
    } else if (title === 't') {
      total_length = that.typewriter_text2.length;
      current_length = that.typewriter_display2.length;
      if (current_length < total_length) {
        that.typewriter_display2 += that.typewriter_text2[current_length];
        setTimeout(that.typingCallback2, 100, that, title);
      }
    }
  }

  //Run typing animations in order while stimulating a return to a new line by "moving" the typing sign to this new line then display the icons
  public async run(): Promise<void> {
    this.typingCallback(this);

    this.sleep(2700).then(() => {
      this.typingSign = false;
      this.typingSign2 = true;
    
      this.typingCallback2(this, 't');
  
      this.sleep(2000).then(() => {
        this.HideShow = true;
      }).then(() => {
        this.sleep(100).then(() => {
          this.g = true
        })
        this.sleep(200).then(() => {
          this.l = true
        })
        this.sleep(300).then(() => {
          this.s = true
        })
      })
    })
  }

  sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  //Scroll to a section
  goTo(location: string): void {
    window.location.hash = location;
  
    //Remove the # and whatever after it from the url
    history.replaceState({}, document.title, window.location.hash.split('#')[0]);
  }

  options: AnimationOptions = {
    path: '/assets/Lottiefiles/6509-deploying.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    width: '40vh'
  };

  //Scroll to the top of the page
  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

  constructor(@Inject(TRANSLATION) public readonly lang: Translation, 
    public _router: Router,
    public _activatedRoute: ActivatedRoute) { 
    this.typewriter_text2 = lang.welcome.home.title;
    this.typewriter_text2_pretitle = lang.welcome.home.preTitle;
    this.typewriter_text2_anotherpretitle = lang.welcome.home.anotherPreTitle;
    this.typewriter_text = lang.welcome.home.name
  }


  ngOnInit(): void {
    this.run();
  }

}
