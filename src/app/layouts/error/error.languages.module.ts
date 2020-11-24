import { NgModule } from "@angular/core";
import { en } from "../../i18n/en.translation";
import { TRANSLATION } from "../../i18n/utils";
import { fr } from "../../i18n/fr.translation";

//Note that this component is exported from the routing module
import { ErrorModule } from "./error.module";

@NgModule({
    imports: [
        ErrorModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: en},
    ],
})
export class ErrorEnModule {}

//Using Scully it works with fr and en from the same module
@NgModule({
    imports: [
        ErrorModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: fr},
    ],
})
export class ErrorFrModule {}