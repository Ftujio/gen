import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'phenotype-form',
	templateUrl: 'app/templates/phenotype.form.component.html'
})

export class PhenotypeFormComponent{
	// TODO: get the data from the API
	message = "Check all the checkboxes!";
	numOfChecked = 0;

	checkboxes = [
		{label: 'autism'},
		{label: 'congenital heart disease'},
		{label: 'epilepsy'},
		{label: 'intelectual disability'},
		{label: 'schizophrenia'},
		{label: 'unaffected'}
	];

	constructor(){
		
	}

	noneButtonState() {
		return !this.checkboxes.some(_ => _.state);
	}

	allButtonState() {
		//return this.checkboxes.some(_ => _.state);


	}

	checkNumOfCb(){
		this.numOfChecked = 0;

		var num = this.checkboxes.length;

		for(let cb of this.checkboxes){
			if(cb.state == true) {
				this.numOfChecked++;
			} else if(cb.state == false){
				this.numOfChecked--;
			}
		}

		if(this.numOfChecked == 0){
			this.message = "Check at least one checkbox!";
		} else if(this.numOfChecked == num){
			this.message = "All of them are checked!";
		} else {
			this.message = "Check all the checkboxes!"
		}

		console.log("Found ", this.numOfChecked, " checkboxes checked.");
	}

	cbState(){
		this.checkNumOfCb();
	}

	checkAll(){
		console.log('pressed all button!');
	}

	checkNone(){
		console.log('pressed none button!');
	}
}