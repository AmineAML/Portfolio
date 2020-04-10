import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';




import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const Material = [
  FontAwesomeModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,


  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule
];

@NgModule({
  imports: [/*Material*/],
  exports: [Material]
})
export class MaterialModule { }
