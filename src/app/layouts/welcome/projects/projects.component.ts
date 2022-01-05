import { Component, OnInit, Inject } from '@angular/core';
import { faEye, faHandPointer, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import enPjts from "../../../../assets/data/en-projects.json";
import frPjts from "../../../../assets/data/fr-projects.json";
import { IProjects } from "../../../core/interfaces/projects.interface";
import { TRANSLATION, Translation } from 'src/app/i18n/utils';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { VideoDialogComponent } from '../../../core/video-dialog/video-dialog/video-dialog.component';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from 'src/app/core/video-dialog/video-dialog/video-dialog.component';

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
  faPlayCircle = faPlayCircle;
  //Make 2 json files of projects with english and french and load per language
  projectsJSON: IProjects[];
  filterBy = 'all';
  loaded = false;
  projects;
  isTouch;
  dialogOpened = false


  constructor(@Inject(TRANSLATION) public readonly lang: Translation, /*private matDialog: MatDialog*/public dialog: MatDialog) {
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
      this.projects = this.projectsJSON.slice(0).filter(p => p.moodboard == false);
    } else {
      this.projectsJSON = frPjts.projects;
      this.projects = this.projectsJSON.slice(0).filter(p => p.moodboard == false);
    }
  }


  // openDialog(url: string) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = {
  //     url: url
  //   };
  //   this.matDialog.open(VideoDialogComponent, dialogConfig);
  //   this.dialogOpened = !this.dialogOpened
  // }

  // closeDialog() {
  //   this.matDialog.closeAll()
  //   this.dialogOpened = !this.dialogOpened
  // }

  toggleCmdOpen: Subject<boolean> = new Subject();
  toggleUrlValue: Subject<string> = new Subject();
  togCmdOpen = false
  toggleCmd(open: boolean | string, url?: string) {
    console.log(url)
    this.toggleUrlValue.next(url)
    
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
}