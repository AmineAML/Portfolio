import { Component, OnInit, Inject } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { TRANSLATION, Translation } from 'src/app/i18n/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faCode = faCode;
  
  constructor(@Inject(TRANSLATION) public readonly lang: Translation) { }

  ngOnInit(): void {
  }

}
