import { Component, OnInit } from '@angular/core';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-four',
  templateUrl: './dialog-four.component.html',
  styleUrls: ['./dialog-four.component.scss']
})
export class DialogFourComponent implements OnInit {

  faEye = faEye;
  faCode = faCode;
  
  constructor() { }

  ngOnInit(): void {
  }

}
