import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subject } from 'rxjs';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent /*implements OnInit, OnDestroy*/ {
  @Input() openCmd: Subject<boolean>;
  @Output() closeCmd = new EventEmitter();
  @Input() urlChanged: Subject<string>;
  
  loaded = false;

  constructor(public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

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

  // toggleConsole() {
  //   this.closeCmd.emit('Nein')

  //   this.openConsole = false
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
