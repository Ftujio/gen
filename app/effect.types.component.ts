import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormChecker } from './form.control';

@Component({
	selector: 'effect-types-form',
	templateUrl: 'app/templates/effect.types.component.html',
	styleUrls: ['app/css/form.component.css']
})
export class EffectTypesFormComponent{
	formChecker: FormChecker = new FormChecker;

	constructor(private formService: FormService){
		console.log('EffectTypesFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getEffectTypes().subscribe(
			data => {
				//this.formControl.checkboxes = data;
				for(let cb of data){
					for(let c of cb.data){
						this.formChecker.checkboxes.push(c);
					}
				}
				console.log(this.formChecker.checkboxes);
			}
		);
	}
}