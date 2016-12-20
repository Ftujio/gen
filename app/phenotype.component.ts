import { Component } from '@angular/core';

import { PhenotypeFormComponent } from 'app/phenotype.form.component';

@Component({
	selector: 'phenotype',
	templateUrl: 'app/templates/phenotype.component.html'
})

export class PhenotypeComponent{
	checkAll(){
		console.log('pressed all button!');
	}

	checkNone(){
		console.log('pressed none button!');
	}

	constructor() {
		
	}
}