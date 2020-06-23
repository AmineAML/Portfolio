import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  template: `
    <div class="lds-facebook"><div></div><div></div><div></div></div>
  `,
  styleUrls: ['./seleton-loader.component.scss']
})
export class SeletonLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
