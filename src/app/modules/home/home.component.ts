import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faDownload = faDownload;
  
  constructor() { }

  ngOnInit(): void {
  }

}
