import { Component, OnInit } from '@angular/core';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-one',
  templateUrl: './dialog-one.component.html',
  styleUrls: ['./dialog-one.component.scss']
})
export class DialogOneComponent implements OnInit {

  faEye = faEye;
  faCode = faCode;
  
  constructor() { }

  ngOnInit(): void {
  }

}
