import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleInterfaceComponent } from './console-interface/console-interface.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsoleInterfaceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ConsoleInterfaceComponent
  ]
})
export class ConsoleModule { }
