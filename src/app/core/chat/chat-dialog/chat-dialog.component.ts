import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from "rxjs";
import "rxjs/add/operator/scan";
import { faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit, AfterViewChecked {
  @ViewChildren("scrollFrame") scrollFrame: QueryList<ElementRef>;
  @ViewChild("chatWindow", {static: false}) chatWindow: ElementRef;
  @Input() openChatbot: boolean;

  faRobot = faRobot;
  faPaperPlane = faPaperPlane;

  constructor(private chat: ChatService) { }

  //ChatBot
  messages: Observable<Message[]>;
  formValue: string;
  sendMessage() {
    //Check that string is not empty and does not contain only whitespace
    if (this.formValue && !/^\s+$/.test(this.formValue))
    {
      this.chat.converse(this.formValue);
      this.formValue = '';
    }
  }

  //Display and hide the chatbot box messaging
  displayChat = false;
  toggleChat() {
    if (this.displayChat == false) {
      this.displayChat = true;
    } else {
      this.displayChat = false;
      if (this.openChatbot = true) {
        this.openChatbot = false;
      }
    }
  }

  ngOnInit(): void {
    //Messages with the bot
    //Appends to array after each enw message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    //this.chat.talk();
  }

  //Auto scroll to the bottom of the chat
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    //console.log("scroll!");
    try {
      this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
  } catch(err) { }        
  }
}
