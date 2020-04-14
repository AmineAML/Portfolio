import { Component, OnInit, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  //SEO
  name = environment.application.name;
  angular = environment.application.angular;
  material = environment.application.material;
  fontawesome = environment.application.fontawesome;
  aos = environment.application.aos;

  features: any;

  isShow: boolean;
  topPosToStartShowing = 100;

  faAngleUp = faAngleUp;
  
  constructor(    
    private meta: Meta,
    private titleService: Title) { }

  
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

  heightDivChange = false;
  ngOnInit() {
    this.titleService.setTitle('Amine Amellouk Developer Portfolio | Amine Amellouk');
    this.meta.addTag({
      name: 'amine amellouk portfolio',
      content: 'amine amellouk'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Software engineer' +
          ' apps developer'
      });

    console.log(this.getBrowserName())
    if (this.getBrowserName() === 'firefox') {
      this.heightDivChange = true;
    }
  }


}
