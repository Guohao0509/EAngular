import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRouterModule } from './app.router';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRouterModule
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule { }
