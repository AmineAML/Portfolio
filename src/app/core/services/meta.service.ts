import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  hiByLanguage = 'test';

  constructor( private titleService: Title, private metaService: Meta, 
    private router: Router, private activatedRoute: ActivatedRoute) { }

  updateMetaData(title?: string) {    
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
 
      var rt = this.getChild(this.activatedRoute)
 
      rt.data.subscribe(data => {
        //console.log(data);

        if (this.router.url === '/hi') {
          //this.titleService.setTitle(this.hiByLanguage + ' | Amine Amellouk')
          this.getHiByLanguages()
        } else {
          this.titleService.setTitle(data.metadata.title)
        }
 
        //Add description tag if it has a value, removes it if doesn't have a value and it exist
        if (data.metadata.description) {
          this.metaService.updateTag({ name: 'description', content: data.metadata.description })
        } else {
          this.metaService.removeTag("name='description'")
        }
 
        //Don't allow robots to index the page if it's specifed, else allow them to index it
        if (data.metadata.robots) {
          this.metaService.updateTag({ name: 'robots', content: data.metadata.robots })
        } else {
          this.metaService.updateTag({ name: 'robots', content: "follow,index" })
        }

        if (data.metadata.keywords) {
          this.metaService.updateTag({ name: 'robots', content: data.metadata.keywords })
        } else {
          this.metaService.updateTag({ name: 'keywords', content: `Angular, TypeScript, C#, .NET Core, Économétrie, 
                                                          économétrie, Économetrics, econometrics, HTML, HTML5, CSS, SASS, 
                                                          SCSS, Comptabilité, Finance, Micro économie, Macro écnomie, 
                                                          Micro economics, Macro economics, JavaScript, SQL Server, MySQL, 
                                                          SQL, NoSQL, Firebase, JSON, CSS3, Hire, Embauche, Front-End, 
                                                          Front-End developer, front end developer, développeur, software, 
                                                          engineer, emploi, emplois, CV, Dabatabase, Databases, 
                                                          Software engineer, Développement informatique, Économie, économie, 
                                                          écoomiste, Git, GitHub, Back-End, back end, Back-End developer, 
                                                          front-end, front end, développeur front-end, développeur front end, 
                                                          développeur back end, développeur back-end, Computer Science, 
                                                          computer science, web development, développeur web, front office, 
                                                          développeur front office, développeur back office, Intégrateur Web, 
                                                          Full-Stack, Full Stack, full stack, Full-Stack developper, full-stack 
                                                          developper, développeur full-stack, développeur full stack, 
                                                          développeur web front end, developpeur web front end, SEO, Scully, 
                                                          NPM, Angular Material, Bootstrap, Materialize` })
        }
 
      })
 
    })
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  getHiByLanguages(data?) {
    this.myMethodSubject.next(data);
    //this.hiByLanguage = this.myMethodSubject;
    //console.log(data);
    this.hiByLanguage = data;
    this.titleService.setTitle('Amine says ' + this.hiByLanguage)
  }
}
