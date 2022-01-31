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
          this.metaService.addTag({ name: 'keywords', content: `developer, APIs, SSG, SPA, software developer, economics, applications, web, mobile, SEO, cloud, CDN, development, code, devops, back-end, backend, freelance, freelancer, back-end developer, back-end engineer, api developer, devops developer devops engineer, ssg developer, spa developer, jamstack developer, seo developer, software developer, nodejs developer, node.js developer .net developer, dotnet developer, nestjs developer, angular developer, svelte developer` })
        }

        //More meta tags of social media from https://moz.com/blog/meta-data-templates-123
 
        // Social media tags
        this.metaService.addTags([
          { name: 'og:title', content: data.metadata.title },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: 'https://www.amineamellouk.com' },
          { name: 'og:description', content: data.metadata.description },
          { name: 'og:image', content: 'https://www.amineamellouk.com/assets/imgs/thumbnail_of_portfolio.png' }
        ])

        // Twitter tags
        this.metaService.addTags([
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@aml_amine' },
          { name: 'twitter:title', content: 'Amine Amellouk\'s Portfolio' },
          { name: 'twitter:description', content: data.metadata.description },
          { name: 'twitter:image', content: 'https://www.amineamellouk.com/assets/imgs/thumbnail_of_portfolio.png' },
          { name: 'twitter:image:alt', content: 'Amine Amellouk\'s Portfolio Thumbnail' }
        ])
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
    this.titleService.setTitle(this.hiByLanguage)
  }
}
