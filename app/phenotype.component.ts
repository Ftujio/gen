import { Component } from '@angular/core';

@Component({
	selector: 'phenotype',
	templateUrl: 'app/templates/phenotype.component.html'
})

export class PhenotypeComponent{
	checkboxValue = '';
	

	checkAll(){
		console.log('pressed all button!');
	}

	checkNone(){
		console.log('pressed none button!');
	}

	check(){
		console.log('value: ', this.checkboxValue);
	}
}