import { Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faEye, faHandPointer, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import enPjts from "../../../assets/data/en-projects.json";
import frPjts from "../../../assets/data/fr-projects.json";
import { IProjects } from "../../core/interfaces/projects.interface";
import { TRANSLATION, Translation } from 'src/app/i18n/utils';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from 'src/app/core/video-dialog/video-dialog/video-dialog.component';

@Component({
  selector: 'app-moodboard',
  templateUrl: './moodboard.component.html',
  styleUrls: ['./moodboard.component.scss']
})
export class MoodboardComponent implements OnInit {

  constructor(@Inject(TRANSLATION) public readonly lang: Translation, public dialog: MatDialog) { }

  percentagevisibilityInViewport = 50;
  //Setting project component's in viewport percentage to 70% that it wouldn't cause any problem with the another component
  percentagevisibilityInViewportProjects = 70;
  //Default value is the home component
  componentInViewport = "h";
  cHome
  cAbout
  cProjects
  cContact

  faEye = faEye;
  faGithub = faGithub;
  faHandPointer = faHandPointer;
  faPlayCircle = faPlayCircle;
  //Make 2 json files of projects with english and french and load per language
  projectsJSON: IProjects[];
  filterBy = 'all';
  loaded = false;
  projects;
  isTouch;
  dialogOpened = false

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

  openDialog(url: string): void {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      width: '80vw',
      height: '80vh',
      data: {url: url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

    //Check for a touch screen and langauge
    isTouchScreen() {
      if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)) {
        if (this.lang.language == 'English') {
          this.isTouch = "tap";
        } else {
          this.isTouch = "appuyer";
        }
      } else {
        if (this.lang.language == 'English') {
          this.isTouch = "hover your mouse";
        } else {
          this.isTouch = "passer votre souris";
        }
      }
    }

  ngOnInit(): void {
    this.isTouchScreen();
    if (this.lang.language == 'English') {
      this.projectsJSON = enPjts.projects;
      this.projects = this.projectsJSON.slice(0).filter(p => p.moodboard == true);
    } else {
      this.projectsJSON = frPjts.projects;
      this.projects = this.projectsJSON.slice(0).filter(p => p.moodboard == true);
    }
  }

}
