import { Component, OnInit } from '@angular/core';
import { faEye, faCode, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('400ms ease-in', keyframes([
          style({transform: 'translateY(50%)', opacity: 0, offset: 0}),
          style({transform: 'translateY(0%)', opacity: 1, offset: 1.0})
        ]))
      ]),
      transition(':leave', [
      animate('400ms ease-in', keyframes([
        style({transform: 'translateY(0%)'}),
        style({transform: 'translateY(50%)'})
      ]))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  faEye = faEye;
  faCode = faCode;
  faHandPointer = faHandPointer;

  projects = [
    {name: 'LocaIT', technologies: [ {t: 'HTML5 | ' }, {t: 'CSS3 | '}, {t: 'Bootstrap'} ] , description: 'For this project I worked with a collegue to make a rental car landing page website', demoLink: 'https://locait.netlify.com/', codeLink: 'https://github.com/AmineAML/LocaIT', displayImg: false, img: 'assets/imgs/projects-gifs/LocaIT.gif'},
    {name: 'Cube Solves Timer', technologies: [ {t: 'C#' } ] , description: 'For this project I used C# to make an application that allows to users to keep track on their progress of solving the Rubik\'s Cube', demoLink: '', codeLink: '', displayImg: false, img: 'assets/imgs/projects-gifs/CubeSolvesTimer.gif'},
    {name: 'NoteTaker', technologies: [ {t: 'C#' } ] , description: 'For this project I used C# to make an application for Windows 10 that resembles to the Windows 7 gadgets, which allow the users to take notes on their screen, it stores them and keeps them organized in a text file, with the feature of notifiying how many notes the app has stored', demoLink: '', codeLink: '', displayImg: false, img: 'assets/imgs/projects-gifs/NoteTaker.gif'},
    {name: 'UniFace', technologies: [ {t: 'C# | ' }, {t: 'SMTP | '}, {t: 'SQL Server'}] , description: 'For this project I worked with C# making a CRUD application allowing also to retrive account by sending an email and printing lists and results. University\'s face or the face of the university is an application intended for professors, administration and students allowing them to access their university accounts either to insert notes (for professor), manage privileges of accounts (for administration), or to consult the results (for students)', demoLink: '', codeLink: '', displayImg: false, img: ''},
];


  constructor() { 
  }

  ngOnInit(): void {
  }

}
