import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  emailFormControl = new FormControl('', [
    //Validators.required,
    Validators.email,
  ]);

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: this.emailFormControl, //new FormControl(''),
    message: new FormControl(''),
  });

  durationInSeconds = 5;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  onSubmit() {
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
          });
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            //alert("Your message has been sent!");

            //Display a popup that submission was sent
            this._snackBar.openFromComponent(MessageSentComponent, {
              duration: this.durationInSeconds * 1000,
            });
          } else {
            //alert("Something went wrong when sending your message.");

            //Display an error popup that about submission
            this._snackBar.openFromComponent(MessageErrorComponent, {
              duration: this.durationInSeconds * 1000,
            });
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    );

    //Reset form after submission
    this.contactForm.reset();
  };

  ngOnInit(): void {
  }

}

@Component({
  selector: 'snack-bar-message-sent-component',
  template: `
    <span class="example-pizza-party">
      Your message has been sent!
    </span>
  `,
  styles: [`
    .example-pizza-party {
      color: #cc441b;
    }
  `],
})
export class MessageSentComponent { }

@Component({
  selector: 'snack-bar-message-error-component',
  template: `
    <span class="example-pizza-party">
      Something went wrong when sending your message.
    </span>
  `,
  styles: [`
    .example-pizza-party {
      color: #cc441b;
    }
  `],
})
export class MessageErrorComponent { }