import { Component, OnInit, Inject } from '@angular/core';
import { TRANSLATION, Translation } from 'src/app/i18n/utils';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  wl;

  constructor(@Inject(TRANSLATION) public readonly lang: Translation,
  public _router: Router) { }

  ngOnInit(): void {
    if (this.lang.language == 'English') {
      this.wl = 'en';
    } else {
      this.wl = 'fr';
    }
  }

}
