import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormControl } from './form.control';

@Component({
	selector: 'phenotype-form',
	templateUrl: 'app/templates/phenotype.form.component.html'
})
export class PhenotypeFormComponent{
	formControl: FormControl = new FormControl;

	constructor(private formService: FormService){
		console.log('PhenotypeFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getPhenotypes().subscribe(
			data => this.formControl.checkboxes = data.data
		);
	}
}