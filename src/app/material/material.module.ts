import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';



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
  MatSlideToggleModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatTabsModule,
  MatInputModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
