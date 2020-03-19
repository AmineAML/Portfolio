import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
import { ErrorComponent } from './layouts/error/error.component';


const routes: Routes = [
  //{path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '', component: WelcomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
