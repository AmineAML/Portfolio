import { Component, OnInit } from '@angular/core';
import { faEye, faCode, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import pjts from "../../../../assets/data/projects.json";
import { IProjects } from "../../../core/projects.model";

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
  faCode = faCode;
  faHandPointer = faHandPointer;
  projectsJSON: IProjects[] = pjts.projects;
  filterBy = 'all';
  loaded = false;
  projects;
  isTouch;


  constructor() {
    this.projects = this.projectsJSON.slice(0);
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

  isTouchScreen() {
    if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      this.isTouch = "tap";
    }else {
      this.isTouch = "hover your mouse";
    }
  }

  ngOnInit(): void {
    this.isTouchScreen();
  }

}
