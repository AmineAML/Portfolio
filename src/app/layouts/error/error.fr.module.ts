import { NgModule } from "@angular/core";
import { fr } from "../../i18n/fr.translation";
import { TRANSLATION } from "../../i18n/utils";

//Note that this component is exported from the routing module
import { ErrorModule } from "./error.module";

@NgModule({
    imports: [
        ErrorModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: fr},
    ],
})
export class ErrorFrModule {}