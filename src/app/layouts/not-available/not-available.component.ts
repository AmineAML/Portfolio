import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-available',
  templateUrl: './not-available.component.html',
  styleUrls: ['./not-available.component.scss']
})
export class NotAvailableComponent implements OnInit {

  constructor(private _location: Location,
              private _router: Router) { }

  homePage() {
    this._router.navigateByUrl("/")
  }

  previousPage() {
    this._location.back()
  }

  ngOnInit(): void {
  }

}
