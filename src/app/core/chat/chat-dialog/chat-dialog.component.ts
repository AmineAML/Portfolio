import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable, Subject } from "rxjs";
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
  @Input() openChatbot: Subject<boolean>;
  @Output() closeChatbot = new EventEmitter();
  @ViewChild('userInput') chatbotInput: ElementRef;

  faRobot = faRobot;
  faPaperPlane = faPaperPlane;

  openChat = false

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
  toggleChat() {
    this.closeChatbot.emit('Nein')

    this.openChat = false
  }

  ngOnInit(): void {
    //Messages with the bot
    //Appends to array after each enw message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    //this.chat.talk();

    this.openChatbot.subscribe(v => {
      //console.log(v)

      if (v === true) {
        this.openChat = true

        setTimeout(()=>{
          this.chatbotInput.nativeElement.focus();
        }, 1000);
      } else {
        this.openChat = false
      }
    })
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
