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

  constructor(public dialog: MatDialog) { }

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
