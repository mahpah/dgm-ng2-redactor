import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
	selector: 'app',
	providers: [  ],
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.jade',
})
export class AppComponent {
	private form: FormGroup

	constructor(
		private formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			text: [],
		})
	}

	ngOnDestroy() {
	}
}