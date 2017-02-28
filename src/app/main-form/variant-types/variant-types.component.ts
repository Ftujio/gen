import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-variant-types',
  templateUrl: './variant-types.component.html',
  styleUrls: ['./variant-types.component.css', '../css/form.css'],
  outputs: ['variantTypesChanged', 'validityChanged']
})
export class VariantTypesComponent implements OnInit {

	variantTypesChanged = new EventEmitter<Object>();
	validityChanged = new EventEmitter<boolean>();

	data: Object;
	numOfChecked: number = 0;
	message: String;
	valid: boolean = false;

	constructor(private formService: FormService) {
		this.formService.getVariantTypes().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
			}
		);

		this.validityChanged.emit(this.valid);
	}

	ngOnInit() {
		this.validityChanged.emit(this.valid);
	}

	onSubmit(form: NgForm){
		console.log(form.value);
	}

	setMessage(){
		/*if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else if(this.numOfChecked < this.data['length']){
			this.message = 'Check all the checkboxes';
		} else {
			this.message = 'All the checkboxes are checked';
		}*/

		if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
			this.valid = false;
			this.validityChanged.emit(this.valid);
		} else {
			this.message = '';
			this.valid = true;
			this.validityChanged.emit(this.valid);
		}
	}

	checkStatus(form: NgForm){
		this.numOfChecked = 0;

		for(let key in form.value){
			let value = form.value[key];
			//console.log("\"", key, "\"", ": \"", value, "\"");
			if(value == true){
				this.numOfChecked++;
			}
		}

		this.setMessage();
		this.variantTypesChanged.emit(form);
	}

	checkAll(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == false || value == undefined){
				form.controls[key].setValue(true);
				this.numOfChecked++;
			}
		}

		this.setMessage();
		this.variantTypesChanged.emit(form);
	}

	checkNone(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == true){
				form.controls[key].setValue(false);
				this.numOfChecked--;
			}
		}

		this.setMessage();
		this.variantTypesChanged.emit(form);
	}

}
