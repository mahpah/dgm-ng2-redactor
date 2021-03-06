import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RedactorModule } from '../src'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		RedactorModule.forRoot({
			minHeight: 500,
		}),
	],

	declarations: [
		AppComponent,
	],

	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
