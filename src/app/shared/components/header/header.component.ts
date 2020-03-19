import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  
  constructor() { }

 goTo(location: string): void {
  window.location.hash = location;

  //Remove the # and whatever after it from the url
  history.replaceState({}, document.title, window.location.hash.split('#')[0]);
  }
  

  ngOnInit(): void {
  }

}
