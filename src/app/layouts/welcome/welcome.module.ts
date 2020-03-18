import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ProjectsComponent } from 'src/app/modules/projects/projects.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { DialogOneComponent } from 'src/app/dialogProjectsPopup/dialog-one/dialog-one.component';
import { DialogTwoComponent } from 'src/app/dialogProjectsPopup/dialog-two/dialog-two.component';
import { DialogThreeComponent } from 'src/app/dialogProjectsPopup/dialog-three/dialog-three.component';
import { DialogFourComponent } from 'src/app/dialogProjectsPopup/dialog-four/dialog-four.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    DialogOneComponent,
    DialogTwoComponent,
    DialogThreeComponent,
    DialogFourComponent
  ],
  entryComponents: [
    DialogOneComponent,
    DialogTwoComponent,
    DialogThreeComponent,
    DialogFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class WelcomeModule { }
