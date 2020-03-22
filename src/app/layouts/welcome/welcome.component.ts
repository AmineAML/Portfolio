import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //As page open it scrolls to the home section
    //window.onload = Scrolldown;
    //function Scrolldown() {
      //window.location.hash = '#home';
    //}
  }

}
