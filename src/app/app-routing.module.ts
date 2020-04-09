import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
import { ErrorComponent } from './layouts/error/error.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { ResumeComponent } from './layouts/resume/resume.component';


const routes: Routes = [
  //{path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '', component: WelcomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
