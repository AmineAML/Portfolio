import { ErrorHandler, Inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(public _router: Router,
                public route: ActivatedRoute) {
        
    }
    handleError(error: Error) {
        let userLanguage: string = localStorage.getItem('AA_PORTFOLIO_LANGUAGE');
        userLanguage = userLanguage.replace(`"`, "").replace(`"`, "")
        if (userLanguage == 'en') {
            this._router.navigateByUrl("/en/unavailable")
        } else {
            this._router.navigateByUrl("/fr/unavailable")
        }
        console.error("Error from global error handler", error)
    }
}