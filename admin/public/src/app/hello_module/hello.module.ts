import { NgModule } from '@angular/core';
import { HelloRouterModule } from "./hello.router";

import { HelloComponent } from "./hello_component/hello.component";
import { HiComponent } from "./hi_component/hi.component";

@NgModule({
	declarations: [
		HelloComponent,
		HiComponent
	],
	imports: [
    	HelloRouterModule
	],
	providers: []
})

export class HelloModule { }