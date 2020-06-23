import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';






import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const Material = [
  FontAwesomeModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,


  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatChipsModule,
  MatCardModule,
  MatTooltipModule,
  MatSlideToggleModule
];

@NgModule({
  imports: [/*Material*/],
  exports: [Material]
})
export class MaterialModule { }
