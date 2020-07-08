import { NgModule } from "@angular/core";
import { en } from "../../i18n/en.translation";
import { TRANSLATION } from "../../i18n/utils";

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