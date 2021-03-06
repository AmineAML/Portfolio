import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { WebsiteLanguage } from "./i18n/utils";


//Load the code value of the language from the local storage
let userLanguage = localStorage.getItem('LANGUAGE');
if (userLanguage == null) {
  userLanguage = 'en';
}

//This doesn't work with Scully
/*const app_routes: Routes = [
  //Redirect the user to English as the default language
  { path: '', redirectTo: WebsiteLanguage.English, pathMatch: 'full'},
  { path: WebsiteLanguage.English, children: [
      { path: '', loadChildren: () => import('./layouts/welcome/welcome.en.module').then(m => m.WelcomeEnModule) },
      { path: 'resume', loadChildren: () => import('./layouts/resume/resume.en.module').then(m => m.ResumeEnModule) },
      { path: '404', loadChildren: () => import('./layouts/error/error.en.module').then(m => m.ErrorEnModule) },
      { path: '**', pathMatch: 'full',  redirectTo: '404' }
    ]},
  { path: WebsiteLanguage.French, children: [
      { path: '', loadChildren: () => import('./layouts/welcome/welcome.fr.module').then(m => m.WelcomeFrModule)},
      { path: 'resume', loadChildren: () => import('./layouts/resume/resume.fr.module').then(m => m.ResumeFrModule) },
      { path: '404', loadChildren: () => import('./layouts/error/error.fr.module').then(m => m.ErrorFrModule) },
      { path: '**', pathMatch: 'full', redirectTo: '404' }
    ]},
  { path: 'hi', loadChildren: () => import('./layouts/hi/hi.module').then(m => m.HiModule) },
  //Use the local storage to detect which language the user's using and remove this " from 1st character and this " from last character
  { path: '**', redirectTo: userLanguage.substr(1).slice(0, -1) + '/404' }
];
*/

//This works with Scully
const app_routes: Routes = [
  //Redirect the user to English as the default language
  { path: '', redirectTo: WebsiteLanguage.English, pathMatch: 'full' },
  {
    path: WebsiteLanguage.English, children: [
      {
        path: '',
        loadChildren: () => import('./layouts/welcome/welcome.languages.module').then(m => m.WelcomeEnModule),
        data: {
          metadata: {
            title: 'Amine Amellouk | Full-Stack Developer',
            description: 'Full-Stack developer from Morocco who enjoys building things, I develop web and mobile applications.'
          },
          animation: 'welcome'
        }
      },
      {
        path: 'resume',
        loadChildren: () => import('./layouts/resume/resume.languages.module').then(m => m.ResumeEnModule),
        data: {
          metadata: {
            title: 'Resume | Amine Amellouk',
            description: 'Amine Amellouk\'s curriculum vitae'
          },
          animation: 'resume'
        }
      },
      {
        path: 'pdf',
        loadChildren: () => import('./layouts/pdf/pdf.languages.module').then(m => m.PdfEnModule),
        data: {
          metadata: {
            title: "Thesis",
            description: "Thesis list"
          },
          animation: 'pdf'
        }
      },
      {
        path: 'unavailable',
        loadChildren: () => import('./layouts/not-available/not-available.languages.module').then(m => m.NotAvailableEnModule),
        data: {
          metadata: {
            title: 'Unavailable',
            description: 'An error occured',
            robots: 'noindex, nofollow'
          }
        }
      },
      {
        path: '404',
        loadChildren: () => import('./layouts/error/error.languages.module').then(m => m.ErrorEnModule),
        data: {
          metadata: {
            title: '404',
            description: 'Page not found',
            robots: 'noindex, nofollow'
          }
        }
      },
      //This route doesn't work with npm scully:serve, it does work the http-server
      { path: '**', redirectTo: '404' }
    ]
  },
  {
    path: WebsiteLanguage.French, children: [
      {
        path: '',
        loadChildren: () => import('./layouts/welcome/welcome.languages.module').then(m => m.WelcomeFrModule),
        data: {
          metadata: {
            title: 'Amine Amellouk | Développeur Full-Stack',
            description: 'Développeur Full-Stack de Maroc qui aime construire des choses, je développe des applications web et des applications mobiles.'
          },
          animation: 'welcome'
        }
      },
      {
        path: 'resume',
        loadChildren: () => import('./layouts/resume/resume.languages.module').then(m => m.ResumeFrModule),
        data: {
          metadata: {
            title: 'CV | Amine Amellouk',
            description: 'Le CV de Amine Amellouk'
          },
          animation: 'resume'
        }
      },
      {
        path: 'pdf',
        loadChildren: () => import('./layouts/pdf/pdf.languages.module').then(m => m.PdfFrModule),
        data: {
          metadata: {
            title: "PFE",
            description: "Liste des projet de fin d'études"
          },
          animation: 'pdf'
        }
      },
      {
        path: 'unavailable',
        loadChildren: () => import('./layouts/not-available/not-available.languages.module').then(m => m.NotAvailableEnModule),
        data: {
          metadata: {
            title: 'Indisponible',
            description: 'Un erreur est sourvenu',
            robots: 'noindex, nofollow'
          }
        }
      },
      {
        path: '404',
        loadChildren: () => import('./layouts/error/error.languages.module').then(m => m.ErrorFrModule),
        data: {
          metadata: {
            title: '404',
            description: 'Page non trouvée',
            robots: 'noindex, nofollow'
          }
        }
      },
      //This route doesn't work with npm scully:serve, it does work the http-server
      { path: '**', redirectTo: '404' }
    ]
  },
  {
    path: 'hi',
    loadChildren: () => import('./layouts/hi/hi.module').then(m => m.HiModule),
    data: {
      metadata: {
        //title with many languages
        title: 'Hi | Amine Amellouk',
        description: 'Hello World'
      }
    }
  },

  //Tried different ways to implement a redirect to 404, still it doesn't work with Scully
  /*//Use the local storage to detect which language the user's using and remove this " from 1st character and this " from last character
  { path: '**', redirectTo: userLanguage.substr(1).slice(0, -1) + '/404' }
  { path: '**', redirectTo: WebsiteLanguage.English + '/404' }
  { path: '**', redirectTo: 'en/404' }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {
    preloadingStrategy: QuicklinkStrategy,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
