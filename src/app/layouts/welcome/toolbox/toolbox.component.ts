import { Component, OnInit, Inject } from '@angular/core';
import { faEye, faHandPointer, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import enPjts from "../../../../assets/data/en-projects.json";
import frPjts from "../../../../assets/data/fr-projects.json";
import { IProjects } from "../../../core/interfaces/projects.interface";
import { TRANSLATION, Translation } from 'src/app/i18n/utils';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { VideoDialogComponent } from '../../../core/video-dialog/video-dialog/video-dialog.component';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from 'src/app/core/video-dialog/video-dialog/video-dialog.component';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('400ms ease-in', keyframes([
          style({ transform: 'translateY(50%)', opacity: 0, offset: 0 }),
          style({ transform: 'translateY(0%)', opacity: 1, offset: 1.0 })
        ]))
      ]),
      transition(':leave', [
        animate('400ms ease-in', keyframes([
          style({ transform: 'translateY(0%)' }),
          style({ transform: 'translateY(50%)' })
        ]))
      ])
    ])
  ]
})
export class ToolboxComponent implements OnInit {

  faEye = faEye;
  faGithub = faGithub;
  faHandPointer = faHandPointer;
  faPlayCircle = faPlayCircle;
  //Make 2 json files of projects with english and french and load per language
  projectsJSON: IProjects[];
  filterBy = 'all';
  loaded = false;
  projects;
  isTouch;
  dialogOpened = false
  toolbox: { title: string, links: { name: string, media: string }[]}[] = [
    {
      title: 'Front-End',
      links: [
        {
          name: 'Angular',
          media: './../../../../assets/svg/front/angular-icon.svg'
        },
        {
          name: 'Svelte',
          media: './../../../../assets/svg/front/svelte-icon.svg'
        },
        {
          name: 'SASS',
          media: './../../../../assets/svg/front/sass.svg'
        },
        {
          name: 'Tailwind CSS',
          media: './../../../../assets/svg/front/tailwindcss-icon.svg'
        },
        {
          name: 'Jest',
          media: './../../../../assets/svg/front/jest.svg'
        },
        {
          name: 'Scully',
          media: './../../../../assets/svg/front/scully.png'
        },
        {
          name: 'Astro',
          media: './../../../../assets/svg/front/astro.svg'
        },
        {
          name: 'RxJs',
          media: './../../../../assets/svg/front/reactivex.svg'
        }
      ]
    },
    {
      title: 'Back-End',
      links: [
        {
          name: 'Node.JS',
          media: './../../../../assets/svg/back/nodejs-icon.svg'
        },
        {
          name: 'NestJS',
          media: './../../../../assets/svg/back/nestjs.svg'
        },
        {
          name: '.Net',
          media: './../../../../assets/svg/back/dotnet.png'
        },
        // {
        //   name: 'Restful APIs',
        //   media: './../../../../assets/svg/back/rest-api.png'
        // },
        {
          name: 'GraphQL',
          media: './../../../../assets/svg/back/graphql.svg'
        },
        {
          name: 'MongoDB',
          media: './../../../../assets/svg/back/mongodb.png'
        },
        // {
        //   name: 'PostgreSQL',
        //   media: './../../../../assets/svg/back/postgresql.svg'
        // },
        {
          name: 'Redis',
          media: './../../../../assets/svg/back/redis.svg'
        },
        {
          name: 'PostgreSQL',
          media: './../../../../assets/svg/back/mssql.svg'
        },
      ]
    },
    {
      title: 'Documentation',
      links: [
        {
          name: 'Swagger',
          media: './../../../../assets/svg/docs/swagger.svg'
        },
        {
          name: 'Postman',
          media: './../../../../assets/svg/docs/postman-icon.svg'
        }
      ]
    },
    {
      title: 'DevOps',
      links: [
        {
          name: 'Netlify',
          media: './../../../../assets/svg/devops/netlify.svg'
        },
        {
          name: 'Vercel',
          media: './../../../../assets/svg/devops/vercel-icon.svg'
        },
        {
          name: 'AWS',
          media: './../../../../assets/svg/devops/aws.svg'
        },
        {
          name: 'Ubuntu',
          media: './../../../../assets/svg/devops/ubuntu.svg'
        },
        {
          name: 'Git',
          media: './../../../../assets/svg/devops/git-icon.svg'
        },
        {
          name: 'ImageKit',
          media: './../../../../assets/svg/devops/imagekit.jpg'
        },
        {
          name: 'Nginx',
          media: './../../../../assets/svg/devops/nginx.svg'
        },
        {
          name: 'Firebase',
          media: './../../../../assets/svg/devops/firebase.svg'
        },
        {
          name: 'OCI',
          media: './../../../../assets/svg/devops/oci.png'
        },
        // {
        //   name: 'MongoDB Atlas',
        //   media: './../../../../assets/svg/devops/mongodb-atlas.png'
        // },
        {
          name: 'Docker',
          media: './../../../../assets/svg/devops/docker-icon.svg'
        },
        // {
        //   name: 'GCP',
        //   media: './../../../../assets/svg/devops/google-cloud.svg'
        // }
      ]
    },
    {
      title: 'CI/CD',
      links: [
        {
          name: 'Jenkins',
          media: './../../../../assets/svg/ci-cd/jenkins.png'
        },
        {
          name: 'GitHub Actions',
          media: './../../../../assets/svg/ci-cd/github-actions.svg'
        },
        {
          name: 'Bitbucket Pipelines',
          media: './../../../../assets/svg/ci-cd/bitbucket-pipelines.svg'
        }
      ]
    },
    {
      title: 'General',
      links: [
        {
          name: 'SEO',
          media: './../../../../assets/svg/general/referencement-seo.png'
        },
        {
          name: 'Figma',
          media: './../../../../assets/svg/general/figma.svg'
        },
        {
          name: 'Ora',
          media: './../../../../assets/svg/general/ora.png'
        },
        {
          name: 'Jira',
          media: './../../../../assets/svg/general/jira.svg'
        }
      ]
    }
  ]


  constructor(@Inject(TRANSLATION) public readonly lang: Translation, /*private matDialog: MatDialog*/public dialog: MatDialog) {
    //this.projects = this.projectsJSON.slice(0);
  }

  /*filter(x) {
    this.filterBy = x;
    if (x == 'all') {
      this.projects = this.projectsJSON;
    }
    else {
      this.projects = this.projectsJSON.filter(m => m.technologies[0].t === x)
    }
  }
  */
  //v

  //Check for a touch screen and langauge
  isTouchScreen() {
    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.maxTouchPoints > 0)) {
      if (this.lang.language == 'English') {
        this.isTouch = "tap";
      } else {
        this.isTouch = "appuyer";
      }
    } else {
      if (this.lang.language == 'English') {
        this.isTouch = "hover your mouse";
      } else {
        this.isTouch = "passer votre souris";
      }
    }
  }

  ngOnInit(): void {
    this.isTouchScreen();
    if (this.lang.language == 'English') {
      this.projectsJSON = enPjts.projects;
      this.projects = this.projectsJSON.slice(0).filter(p => p.moodboard == false);
    } else {
      this.projectsJSON = frPjts.projects;
      this.projects = this.projectsJSON.slice(0).filter(p => p.moodboard == false);
    }
  }


  // openDialog(url: string) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = {
  //     url: url
  //   };
  //   this.matDialog.open(VideoDialogComponent, dialogConfig);
  //   this.dialogOpened = !this.dialogOpened
  // }

  // closeDialog() {
  //   this.matDialog.closeAll()
  //   this.dialogOpened = !this.dialogOpened
  // }

  toggleCmdOpen: Subject<boolean> = new Subject();
  toggleUrlValue: Subject<string> = new Subject();
  togCmdOpen = false
  toggleCmd(open: boolean | string, url?: string) {
    console.log(url)
    this.toggleUrlValue.next(url)
    
    if (this.togCmdOpen === false) {
      this.togCmdOpen = true

      this.toggleCmdOpen.next(true)
    } else {
      this.togCmdOpen = false

      this.toggleCmdOpen.next(false)
    }

    if (open === 'Nein') {
      this.toggleCmdOpen.next(false)
    }
  }

  openDialog(url: string): void {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      width: '80vw',
      height: '80vh',
      data: {url: url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}