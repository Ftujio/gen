import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormControl } from './form.control';

@Component({
	selector: 'effect-types-form',
	templateUrl: 'app/templates/effect.types.component.html',
	styleUrls: ['app/css/form.component.css']
})
export class EffectTypesFormComponent{
	formControl: FormControl = new FormControl;

	constructor(private formService: FormService){
		console.log('EffectTypesFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getEffectTypes().subscribe(
			data => this.formControl.checkboxes = data
		);
	}
}