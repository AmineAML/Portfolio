import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { curriculumVitae } from '../../../layouts/resume/curriculum-vitae'
import enResume from '../../../../assets/data/en-resume.json'


@Component({
  selector: 'app-console-interface',
  templateUrl: './console-interface.component.html',
  styleUrls: ['./console-interface.component.scss']
})
export class ConsoleInterfaceComponent implements OnInit, AfterViewChecked {
  @ViewChild('consoleWindowScroll') private windowScroll: ElementRef;
  @ViewChild('userInput') cmdInput: ElementRef;
  @Input() openCmd: Subject<boolean>;
  @Output() closeCmd = new EventEmitter();

  cv: curriculumVitae = enResume

  responseToUser: SafeHtml;
  inputByUser: string = "";
  currentAge = Math.floor((Math.abs(Date.now() - new Date("1998-01-13T00:00:00.000Z").getTime()) / (1000 * 3600 * 24))/365.25);
  terminalOutput: string = "";
  //displayConsole = false;
  consoleButtonText = " Open console";
  commands = {
    help: `Available commands: 
            <br>
            <span style="color: #209CEE; margin-left: 10px;">about</span>
            <br>
            <span style="color: #209CEE; margin-left: 10px;">resume</span>
            <br>
            <span style="color: #209CEE; margin-left: 10px;">skills</span>
            <br>
            <span style="color: #209CEE; margin-left: 10px;">contact</span>`,
    about: `I'm Amine AMELLOUK, I'm ${this.currentAge} years of age, I'm a software developer, if you're into tech, economics, philosophy and history then I'm your guy! and I like history and technology`,
    /*skills: `I've worked with html5, css3, scss, bootstrap, materialize css, javascript, typescript, php, python, java, c#, sql server, mysql, firebase, angular, git, blazor <br />
                Prefer using Angular and C#`,
    */
    skills: `I'm comfortable with the following technologies: ${this.cv.skills.experiencedWith} <br />
              Familiar with: ${this.cv.skills.familiarWith}`,
    contact: `You use the contact form bellow or connect with me at <a  rel="noopener" href="https://www.linkedin.com/in/amine-amellouk" target="_blank" rel="noopener" style="color: #209CEE">LinkedIn</a>`,
    resume: `You can read my CV from <a rel="noopener" href="https://www.amineamellouk.com/resume" target="_blank" rel="noopener" style="color: #209CEE">here</a>`
  };
  openConsole = false

  constructor(private sanitizer: DomSanitizer) { }

  toggleConsole() {
    this.closeCmd.emit('Nein')

    this.openConsole = false
  }

  cmdEnter() {

    this.inputByUser = this.inputByUser.toLowerCase();
    //console.log(this.inputByUser);

    if (this.inputByUser in this.commands) {
      this.terminalOutput += "aa:~ guest$ " + this.inputByUser + "<br/>"
      this.terminalOutput += this.commands[this.inputByUser] + "<br/>"
      this.responseToUser = this.sanitizer.bypassSecurityTrustHtml(this.terminalOutput);
    } else {
      this.terminalOutput += "aa:~ guest$ " + this.inputByUser + "<br/>"
      this.terminalOutput += "No such command" + "<br/>"
      this.responseToUser = this.sanitizer.bypassSecurityTrustHtml(this.terminalOutput);
    }

    this.inputByUser = "";
  }

  scrollToBottom(): void {
    try {
        this.windowScroll.nativeElement.scrollTop = this.windowScroll.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  ngOnInit() {
    this.openCmd.subscribe(v => {
      //console.log(v)

      if (v === true) {
        this.openConsole = true

        setTimeout(()=>{
          this.cmdInput.nativeElement.focus();
        }, 1000);
      } else {
        this.openConsole = false
      }
    })
  }

  //This works with (keyup.enter)="cmdEnter()"
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}