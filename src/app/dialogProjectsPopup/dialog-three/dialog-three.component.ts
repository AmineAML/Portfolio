import { Component, OnInit } from '@angular/core';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-three',
  templateUrl: './dialog-three.component.html',
  styleUrls: ['./dialog-three.component.scss']
})
export class DialogThreeComponent implements OnInit {

  faEye = faEye;
  faCode = faCode;
  
  constructor() { }

  ngOnInit(): void {
  }

}
