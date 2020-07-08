import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { TRANSLATION, Translation, WebsiteLanguage } from 'src/app/i18n/utils';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, AfterViewInit {

  playErrorVideo = true;

  //Translations
  translations = Object.entries(WebsiteLanguage);

  constructor(@Inject(TRANSLATION) public readonly lang: Translation) { }

  videoPlayer
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
