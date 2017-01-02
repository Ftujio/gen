import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PhenotypesService } from './services/phenotypes.service';
import { FormControl } from './form.control';

@Component({
	selector: 'phenotype-form',
	templateUrl: 'app/templates/phenotype.form.component.html'
})
export class PhenotypeFormComponent{
	// TODO: get the data from the API
	message = "Check at least one checkbox!";
	numOfChecked: number = 0;
	checkboxes = [];
	formControl: FormControl = new FormControl;
	
	ngOnInit(){
		this.phenotypesService.getPhenotypes().subscribe(
			data => this.checkboxes = data
		);
	}	

	constructor(private phenotypesService: PhenotypesService){
		
	}

	noneButtonState() {
		if(this.checkboxes != undefined){
			return !this.checkboxes.some(_ => _.state);
		}
	}

	allButtonState() {
		//return this.checkboxes.some(_ => _.state);
	}

	checkInputs(){
		this.numOfChecked = 0;

		var num = this.checkboxes.length;

		for(let cb of this.checkboxes){
			if(cb.state == true) {
				this.numOfChecked++;
			}
		}

		if(this.numOfChecked == 0){
			return 'some';
		} else if(this.numOfChecked == num){
			return 'all';
		} else {
			return 'none';
		}
	}

	// Prints the state of the form to the view
	cbState(){
		if(this.checkInputs() == 'some'){
			this.message = "Check at least one checkbox!";
		} else if(this.checkInputs() == 'all'){
			this.message = "All of them are checked!";
		} else {
			this.message = "Check all the checkboxes!"
		}

		//console.log("Found ", this.numOfChecked, " checkboxes checked.");
	}

	checkAll(){
		console.log('pressed all button!');
		if(this.checkInputs() != 'all'){

		}
	}

	checkNone(){
		console.log('pressed none button!');
	}
}