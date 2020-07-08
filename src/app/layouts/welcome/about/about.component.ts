import { Component, OnInit, Inject } from '@angular/core';
import { TRANSLATION, Translation } from 'src/app/i18n/utils';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(TRANSLATION) public readonly lang: Translation) { }

  ngOnInit(): void {
  }
}
