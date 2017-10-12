import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { FuckComponent } from "./fuck_component/fuck.component";
import { ShitComponent } from "./shit_component/shit.component";


const routes: Routes=[
	{ path: 'fuck', component: FuckComponent },
	{ path: 'shit', component: ShitComponent}
]

@NgModule({
	imports:[RouterModule.forChild(routes)],
	exports:[RouterModule],
	providers:[]

})
export class FuckRouterModule { }