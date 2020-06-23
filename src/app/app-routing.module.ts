import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';


const app_routes: Routes = [
  //{path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: '', loadChildren: () => import('./layouts/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'resume', loadChildren: () => import('./layouts/resume/resume.module').then(m => m.ResumeModule)},
  {path: '404', loadChildren: () => import('./layouts/error/error.module').then(m => m.ErrorModule)},
  {path: '**', pathMatch: 'full', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
