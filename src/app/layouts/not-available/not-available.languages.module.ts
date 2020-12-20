import { NgModule } from "@angular/core";
import { en } from "../../i18n/en.translation";
import { TRANSLATION } from "../../i18n/utils";
import { fr } from "../../i18n/fr.translation";
import { NotAvailableModule } from "./not-available.module";

//Note that this component is exported from the routing module

@NgModule({
    imports: [
        NotAvailableModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: en},
    ],
})
export class NotAvailableEnModule {}

//Using Scully it works with fr and en from the same module
@NgModule({
    imports: [
        NotAvailableModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: fr},
    ],
})
export class NotAvailableFrModule {}