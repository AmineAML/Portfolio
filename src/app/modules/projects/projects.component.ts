import { Component, OnInit } from '@angular/core';
import { faEye, faCode, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogOneComponent } from 'src/app/dialogProjectsPopup/dialog-one/dialog-one.component';
import { DialogTwoComponent } from 'src/app/dialogProjectsPopup/dialog-two/dialog-two.component';
import { DialogThreeComponent } from 'src/app/dialogProjectsPopup/dialog-three/dialog-three.component';
import { DialogFourComponent } from 'src/app/dialogProjectsPopup/dialog-four/dialog-four.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faEye = faEye;
  faCode = faCode;
  faHandPointer = faHandPointer;

  DisplayProject1: boolean;
  DisplayProject2: boolean;
  DisplayProject3: boolean;
  DisplayProject4: boolean;

  constructor(public dialog: MatDialog) { 
    this.DisplayProject1 = false;
    this.DisplayProject2 = false;
    this.DisplayProject3 = false;
    this.DisplayProject4 = false;
  }

  openDialogUniFaceApp() {
    this.dialog.open(DialogOneComponent);
  }

  openDialogNoteTaker() {
    this.dialog.open(DialogTwoComponent);
  }

  openDialogCubeSolvesTimer() {
    this.dialog.open(DialogThreeComponent);
  }

  openDialogLocaIT() {
    this.dialog.open(DialogFourComponent);
  }
  
  ngOnInit(): void {
  }

}
