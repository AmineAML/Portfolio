import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  //SEO
  name = environment.application.name;
  angular = environment.application.angular;
  material = environment.application.material;
  fontawesome = environment.application.fontawesome;
  aos = environment.application.aos;

  features: any;

  constructor(    
    private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Amine Amellouk Developer Portfolio | Amine Amellouk');
    this.meta.addTag({
      name: 'amine amellouk portfolio',
      content: 'amine amellouk'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Software engineer' +
          ' apps developer'
      });
  }


}
