import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-console-interface',
  templateUrl: './console-interface.component.html',
  styleUrls: ['./console-interface.component.scss']
})
export class ConsoleInterfaceComponent implements OnInit, AfterViewChecked {
  @ViewChild('consoleWindowScroll') private windowScroll: ElementRef;

  responseToUser: SafeHtml;
  inputByUser: string = "";
  currentAge = Math.floor((Math.abs(Date.now() - new Date("1998-01-13T00:00:00.000Z").getTime()) / (1000 * 3600 * 24))/365.25);
  terminalOutput: string = "";
  displayConsole = false;
  consoleButtonText = " Open console";
  commands = {
    help: `Available commands: <span style="color: #209CEE">about</span>,
            <span style="color: #209CEE">resume</span>,
            <span style="color: #209CEE">skills</span>,
            <span style="color: #209CEE">contact</span>,`,
    about: `I'm Amine AMELLOUK, I'm ${this.currentAge} years of age and I like history and technology`,
    skills: `I've worked with html5, css3, scss, bootstrap, materialize css, javascript, typescript, php, python, java, c#, sql server, mysql, firebase, angular, git, blazor <br />
                Prefer using Angular and C#`,
    contact: `You use the contact form bellow or connect with me at <a  rel="noopener" href="https://www.linkedin.com/in/amine-amellouk" target="_blank" style="color: #209CEE">LinkedIn</a>`,
    resume: `You can read my CV from <a rel="noopener" href="https://www.amineamellouk.com/resume" target="_blank" style="color: #209CEE">here</a>`
  };

  constructor(private sanitizer: DomSanitizer) { }

  toggleConsole() {
    if (this.displayConsole == false) {
      this.displayConsole = true;
      this.consoleButtonText = "Close console";
    } else {
      this.displayConsole = false;
      this.consoleButtonText = "Open console";
    }
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
  }

  //This works with (keyup.enter)="cmdEnter()"
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}