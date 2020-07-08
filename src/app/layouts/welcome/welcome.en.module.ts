import { NgModule } from "@angular/core";
import { en } from "../../i18n/en.translation";
import { TRANSLATION } from "../../i18n/utils";

//Note that this component is exported from the routing module
import { WelcomeModule } from "./welcome.module";

@NgModule({
    imports: [
        WelcomeModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: en},
    ],
})
export class WelcomeEnModule {}