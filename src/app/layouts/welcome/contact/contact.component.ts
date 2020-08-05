import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TRANSLATION, Translation } from 'src/app/i18n/utils';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  emailFormControl = new FormControl('', [
    //Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl2 = new FormControl('', [
    Validators.required,
    //Validators.email,
  ]);

  messageFormControl = new FormControl('', [
    Validators.required,
  ]);

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: this.emailFormControl, //new FormControl(''),
    message: new FormControl(''),
  });

  durationInSeconds = 5;

  submitFormPressedNotifyErrors = false;

  isRequired = false;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, @Inject(TRANSLATION) public readonly lang: Translation) { }

  //Check if the input are fieled, don't submit if any of the inputs aren't filled
  onSubmit() {
    if (!this.contactForm.value.name || !this.contactForm.value.email || !this.contactForm.value.message) {
      //Display an error popup about submission
      this._snackBar.openFromComponent(InputMandatoryComponent, {
        duration: this.durationInSeconds * 1000,
      });
      this.nameFormControl;
      this.emailFormControl2;
      this.messageFormControl;
      this.submitFormPressedNotifyErrors = true;
      this.isRequired = true
    }
    else {
      const body = new HttpParams()
        .set('form-name', 'contact')
        .append('name', this.contactForm.value.name)
        .append('email', this.contactForm.value.email)
        .append('message', this.contactForm.value.message)
      this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
        res => { },
        err => {
          if (err instanceof ErrorEvent) {
            //client side error
            //alert("Something went wrong when sending your message.");

            //Display an error popup about submission
            this._snackBar.openFromComponent(MessageErrorComponent, {
              duration: this.durationInSeconds * 1000,
              panelClass: ['snackbar-background-color']
            });
            console.log(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              //alert("Your message has been sent!");

              //Display a popup that submission was sent
              this._snackBar.openFromComponent(MessageSentComponent, {
                duration: this.durationInSeconds * 1000,
                panelClass: ['snackbar-background-color']
              });
              //Reset form after submission
              this.contactForm.reset();
              this.submitFormPressedNotifyErrors = false;
              this.isRequired = false;
            } else {
              //alert("Something went wrong when sending your message.");

              //Display an error popup that about submission
              this._snackBar.openFromComponent(MessageErrorComponent, {
                duration: this.durationInSeconds * 1000,
                panelClass: ['snackbar-background-color']
              });
              console.log('Error status:');
              console.log(err.status);
              console.log('Error body:');
              console.log(err.error);
            };
          };
        }
      );
    }
  };

  ngOnInit(): void {
  }

}

@Component({
  selector: 'snack-bar-message-sent-component',
  template: `
    <span class="text">
      Your message has been sent!
    </span>
  `,
  styles: [`
    .text {
      color: var(--text-button-color);
    }
  `],
})
export class MessageSentComponent { }

@Component({
  selector: 'snack-bar-message-error-component',
  template: `
    <span class="text">
      Something went wrong when sending your message.
    </span>
  `,
  styles: [`
    .text {
      color: var(--text-button-color);
    }
  `],
})
export class MessageErrorComponent { }

@Component({
  selector: 'snack-bar-input-mandatory-component',
  template: `
    <span class="text">
      All inputs are mandatory.
    </span>
  `,
  styles: [`
    .text {
      color: var(--text-button-color);
    }
  `],
})
export class InputMandatoryComponent { }