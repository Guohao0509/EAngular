import { NgModule } from '@angular/core';
import { FuckRouterModule } from "./fuck.router";

import { FuckComponent } from "./fuck_component/fuck.component";
import { ShitComponent } from "./shit_component/shit.component";


@NgModule({
	declarations: [
		FuckComponent,
		ShitComponent
	],
	imports: [
    	FuckRouterModule
	],
	providers: []
})

export class FuckModule { }
