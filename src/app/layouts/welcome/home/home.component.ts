import { Component, OnInit, Inject } from '@angular/core';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, animate, style } from '@angular/animations';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { TRANSLATION, Translation } from 'src/app/i18n/utils';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      //transition(':leave', [
      //animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      //])
    ])
  ]
})
export class HomeComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileAlt = faFileAlt;
  faStackOverflow = faStackOverflow;

  //Hide and show the sign of typing
  public typingSign = true;
  public typingSign2 = false;

  //Hide and Show icons and the scroll indicator
  public HideShow = false;

  // Change color or last name
  highlightStart = 6;
  highlightLength = 14;

  //Typing animation
  public typewriter_text: string = "Amine AMELLOUK";
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
  public typewriter_display2: string = "";

  typingCallback2(that) {
    let total_length = that.typewriter_text2.length;
    let current_length = that.typewriter_display2.length;
    if (current_length < total_length) {
      that.typewriter_display2 += that.typewriter_text2[current_length];
      setTimeout(that.typingCallback2, 100, that);
    }
  }

  //Run typing animations in order while stimulating a return to a new line by "moving" the typing sign to this new line then display the icons
  public async run(): Promise<void> {
    this.typingCallback(this);

    this.sleep(2700).then(() => {
      this.typingSign = false;
      this.typingSign2 = true;
    
      this.typingCallback2(this);
  
      this.sleep(2700).then(() => {
        this.HideShow = true;
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

  constructor(@Inject(TRANSLATION) public readonly lang: Translation, 
    public _router: Router,
    public _activatedRoute: ActivatedRoute) { 
    this.typewriter_text2 = lang.welcome.home.title;
  }


  ngOnInit(): void {
    this.run();
  }

}
