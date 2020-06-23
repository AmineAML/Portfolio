import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, AfterViewInit {

  playErrorVideo = true;

  constructor() { }

  playVideo() {
    this.playErrorVideo = true;
  }

  ngOnInit(): void {
    this.playVideo();
  }

  ngAfterViewInit() {
    this.playVideo();
  }

}
