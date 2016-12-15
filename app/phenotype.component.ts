import { Component } from '@angular/core';

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

	a(){
		console.log('clicked autism');
	}
}