import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { WebsiteLanguage } from "./i18n/utils";


//Load the code value of the language from the local storage
let userLanguage = localStorage.getItem('LANGUAGE');
if (userLanguage == null) {
  userLanguage = 'en';
}

const app_routes: Routes = [
  //Redirect the user to English as the default language
  {path: '', pathMatch: 'full', redirectTo: WebsiteLanguage.English},
  {path: 'en', children: [
    {path: '', loadChildren: () => import('./layouts/welcome/welcome.en.module').then(m => m.WelcomeEnModule)},
    {path: 'resume', loadChildren: () => import('./layouts/resume/resume.en.module').then(m => m.ResumeEnModule)},
    {path: '404', loadChildren: () => import('./layouts/error/error.en.module').then(m => m.ErrorEnModule)},
    {path: '**', pathMatch: 'full', redirectTo: '404'}
  ]},
  {path: 'fr', children: [
    {path: '', loadChildren: () => import('./layouts/welcome/welcome.fr.module').then(m => m.WelcomeFrModule)},
    {path: 'resume', loadChildren: () => import('./layouts/resume/resume.fr.module').then(m => m.ResumeFrModule)},
    {path: '404', loadChildren: () => import('./layouts/error/error.fr.module').then(m => m.ErrorFrModule)},
    {path: '**', pathMatch: 'full', redirectTo: '404'}
  ]},
  {path: 'hi', loadChildren: () => import('./layouts/hi/hi.module').then(m => m.HiModule)},
  //Use the local storage to detect which language the user's using and remove this " from 1st character and this " from last character
  {path: '**', redirectTo: userLanguage.substr(1).slice(0, -1) + '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
