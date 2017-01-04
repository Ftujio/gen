import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PhenotypesService } from './services/phenotypes.service';
import { FormControl } from './form.control';

@Component({
	selector: 'phenotype-form',
	templateUrl: 'app/templates/phenotype.form.component.html'
})
export class PhenotypeFormComponent{
	formControl: FormControl = new FormControl;

	constructor(private phenotypesService: PhenotypesService){
		console.log('PhenotypeFormComponent loaded');
	}
	
	ngOnInit(){
		this.phenotypesService.getPhenotypes().subscribe(
			data => this.formControl.checkboxes = data.data;
		);
	}
}