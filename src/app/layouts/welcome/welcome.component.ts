import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  //SEO
  name = environment.application.name;
  angular = environment.application.angular;
  material = environment.application.material;
  fontawesome = environment.application.fontawesome;
  aos = environment.application.aos;

  features: any;
  
  constructor(    
    private meta: Meta,
    private titleService: Title) { }

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

  toggleCmdOpen: boolean;
  toggleCmd(open: boolean) {
    //alert(open);
    //this.toggleCmdOpen = open;
    this.toggleCmdOpen = true;
  }

  toggleChatbotOpen: boolean;
  toggleChatbot(open: boolean) {
    //alert(open);
    //this.toggleCmdOpen = open;
    this.toggleChatbotOpen = true;
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

    //console.log(this.getBrowserName())
    if (this.getBrowserName() === 'firefox') {
      this.heightDivChange = true;
    }
  }

  ngAfterViewInit() {
    this.cHome = document.getElementById("home");
    this.cAbout = document.getElementById("about");
    this.cProjects = document.getElementById("projects");
    this.cContact = document.getElementById("contact");
  }
}
