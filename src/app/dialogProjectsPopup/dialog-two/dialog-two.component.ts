import { Component, OnInit } from '@angular/core';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-two',
  templateUrl: './dialog-two.component.html',
  styleUrls: ['./dialog-two.component.scss']
})
export class DialogTwoComponent implements OnInit {

  faEye = faEye;
  faCode = faCode;
  
  constructor() { }

  ngOnInit(): void {
  }

}
