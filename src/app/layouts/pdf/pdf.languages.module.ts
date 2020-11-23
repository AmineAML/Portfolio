import { NgModule } from "@angular/core";
import { en } from "../../i18n/en.translation";
import { TRANSLATION } from "../../i18n/utils";
import { fr } from "../../i18n/fr.translation";

//Note that this component is exported from the routing module
import { PdfModule } from "./pdf.module";

@NgModule({
    imports: [
        PdfModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: en},
    ],
})
export class PdfEnModule {}

//Using Scully it works with fr and en from the same module
@NgModule({
    imports: [
        PdfModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: fr},
    ],
})
export class PdfFrModule {}