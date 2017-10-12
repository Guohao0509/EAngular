import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HelloComponent } from "./hello_component/hello.component";
import { HiComponent } from "./hi_component/hi.component";


const routes: Routes=[
	{ path: 'hello', component: HelloComponent },
	{ path: 'hi', component: HiComponent}
]

@NgModule({
	imports:[RouterModule.forChild(routes)],
	exports:[RouterModule],
	providers:[]

})
export class HelloRouterModule { }