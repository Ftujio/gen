import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'phenotype-form',
	templateUrl: 'app/templates/phenotype.form.component.html'
})

export class PhenotypeFormComponent{
	checkboxes = [
		{label: 'autism'},
		{label: 'congenital heart disease'},
		{label: 'epilepsy'},
		{label: 'intelectual disability'},
		{label: 'schizophrenia'},
		{label: 'unaffected'}
	];

	checkAll(){
		console.log('pressed all button!');
	}

	checkNone(){
		console.log('pressed none button!');
	}

	constructor() {
		
	}
}