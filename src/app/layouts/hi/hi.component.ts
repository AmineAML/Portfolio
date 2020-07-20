import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent implements OnInit {

  //Display Hello in all languages like hello and then السلام and then salut and then gutan tag and more
  hiInLanguages: Array<string> = ["Hello", "السلام", "Salut", "Hola", "Hallo", "Mirë dita", "ታዲያስ", "Салам", "Kaixo", "নমস্কার", "Zdravo", "Olá", "Demat", "Здравейте", "Hola", "Moni", "Bonghjornu", "Bok", "Ahoj", "Hej", "Hallo", "Saluton", "Tere", "سلام", "Bula", "Kamusta", "Hei", "მიესალმები", "Hallo", "Χαίρε", "Aloha", "שלום", "नमस्ते", "Sziasztok", "Halo", "Dia dhuit", "Ciao", "こんにちは", "ನಮಸ್ಕಾರ", "ជំរាបសួរ", "안녕", "ສະບາຍດີ", "Salve", "Sveiki", "Hallau", "Sveiki", "Добар ден", "Selamat tengahari", "Ħelow", "你好", "Kia ora", "नमस्ते", "Hei", "ନମସ୍କାର", "Cześć", "Buna", "Привет", "Talofa", "Haló", "Здраво", "侬好", "Mhoro", "Ahoj", "Zdravo", "Grüss Gott", "Hodi", "Hej", "வனக்கம்", "Xin chào", "Womenjeka", "שלום", "வணக்கம்", "నమస్కారం", "สวัสดีค่ะ/สวัสดีครับ", "Merhaba", "Chào bạn", "Helo", "העלא", "Sawubona"];
  hiByLanguage;

  constructor() { }

  async loopLanguages() {
    for (let i = 0; ; i++) {
      if (i == this.hiInLanguages.length) {
        i = 0;
      }
      this.hiByLanguage = this.hiInLanguages[i];
      await this.delay(300);
    }
  }

  delay(ms:number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit(): void {
    this.loopLanguages();
  }

}
