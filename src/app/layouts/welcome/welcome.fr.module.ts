import { NgModule } from "@angular/core";
import { fr } from "../../i18n/fr.translation";
import { TRANSLATION } from "../../i18n/utils";

//Note that this component is exported from the routing module
import { WelcomeModule } from "./welcome.module";

@NgModule({
    imports: [
        WelcomeModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: fr},
    ],
})
export class WelcomeFrModule {}