import { Component, OnInit, Inject } from '@angular/core';
import { faEye, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import enPjts from "../../../../assets/data/en-projects.json";
import frPjts from "../../../../assets/data/fr-projects.json";
import { IProjects } from "../../../core/services/projects.model";
import { TRANSLATION, Translation } from 'src/app/i18n/utils';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('400ms ease-in', keyframes([
          style({ transform: 'translateY(50%)', opacity: 0, offset: 0 }),
          style({ transform: 'translateY(0%)', opacity: 1, offset: 1.0 })
        ]))
      ]),
      transition(':leave', [
        animate('400ms ease-in', keyframes([
          style({ transform: 'translateY(0%)' }),
          style({ transform: 'translateY(50%)' })
        ]))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  faEye = faEye;
  faGithub = faGithub;
  faHandPointer = faHandPointer;
  //Make 2 json files of projects with english and french and load per language
  projectsJSON: IProjects[];
  filterBy = 'all';
  loaded = false;
  projects;
  isTouch;


  constructor(@Inject(TRANSLATION) public readonly lang: Translation) {
    //this.projects = this.projectsJSON.slice(0);
  }

  /*filter(x) {
    this.filterBy = x;
    if (x == 'all') {
      this.projects = this.projectsJSON;
    }
    else {
      this.projects = this.projectsJSON.filter(m => m.technologies[0].t === x)
    }
  }
  */
  //v

  //Can combine both with same function with a parameter of true or false and assign it to loaded
  videoLoaded() {
    //Mouse enter display loading
    //Video loaded display video and remove animation
    //Mouse leave don't display video and activate animation
    //console.log("Video loaded");
    this.loaded = true;
  }

  videoLoadinganimation() {
    //Using video suspend or durationchange to re-activate the login animation
    //console.log("animation() working");
    this.loaded = false;
  }

  //Check for a touch screen and langauge
  isTouchScreen() {
    if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      if(this.lang.language == 'English') {
        this.isTouch = "tap";
      }else {
        this.isTouch = "appuyer";
      }
    }else {
      if(this.lang.language == 'English') {
        this.isTouch = "hover your mouse";
      }else {
        this.isTouch = "passer votre souris";
      }
    }
  }

  ngOnInit(): void {
    this.isTouchScreen();
    if(this.lang.language == 'English') {
      this.projectsJSON = enPjts.projects;
      this.projects = this.projectsJSON.slice(0);
    } else {
      this.projectsJSON = frPjts.projects;
      this.projects = this.projectsJSON.slice(0);
    }
  }

}
