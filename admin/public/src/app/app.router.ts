import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from "../environments/environment";

const routes: Routes = [
	{
		path:'hello',
		loadChildren:'app/hello_module/hello.module#HelloModule'
	},
	{
		path:'fuck',
		loadChildren:'app/fuck_module/fuck.module#FuckModule'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRouterModule { }
