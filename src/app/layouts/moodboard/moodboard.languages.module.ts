import { NgModule } from "@angular/core";
import { en } from "../../i18n/en.translation";
import { TRANSLATION } from "../../i18n/utils";
import { fr } from "../../i18n/fr.translation";

//Note that this component is exported from the routing module
import { MoodboardModule } from "./moodboard.module";

@NgModule({
    imports: [
        MoodboardModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: en},
    ],
})
export class MoodboardEnModule {}

//Using Scully it works with fr and en from the same module
@NgModule({
    imports: [
        MoodboardModule,
    ],
    providers: [
        {provide: TRANSLATION, useValue: fr},
    ],
})
export class MoodboardFrModule {}