import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormService } from './services/form.service';
import { FormChecker } from './form.control';

@Component({
	selector: 'phenotype-form',
	templateUrl: 'app/templates/phenotype.form.component.html',
	styleUrls: ['app/css/form.component.css']
})
export class PhenotypeFormComponent{
	formChecker: FormChecker = new FormChecker;

	constructor(private formService: FormService){
		console.log('PhenotypeFormComponent loaded');
	}
	
	ngOnInit(){
		this.formService.getPhenotypes().subscribe(
			data => this.formChecker.checkboxes = data.data
		);
	}
}