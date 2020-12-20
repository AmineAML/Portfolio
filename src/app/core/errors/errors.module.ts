import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './global-error-handler';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // register the classes for the error interception here
  /*providers: [
    {
      // proccess all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
  */
})
export class ErrorsModule { }
