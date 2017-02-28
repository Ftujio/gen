import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-effect-types-form',
  templateUrl: './effect-types.component.html',
  styleUrls: ['../css/form.css', './effect-types.component.css'],
  outputs: ['effectTypesChanged', 'validityChanged']
})
export class EffectTypesComponent implements OnInit {

	effectTypesChanged = new EventEmitter<Object>();
	validityChanged = new EventEmitter<boolean>();

	data;
	numOfChecked: number = 0;
	message: String;
	valid: boolean = false;
	formLength: number = 0;

	constructor(private formService: FormService) {
		this.formService.getEffectTypes().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
				for(let a in this.data){
					this.formLength += this.data[a].data.length;
				}
			}
		);
	}

	ngOnInit() {
		this.validityChanged.emit(this.valid);
	}

	setMessage(form: NgForm){
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

		this.setMessage(form);
		this.effectTypesChanged.emit(form);
	}

	checkAll(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == false || value == undefined){
				form.controls[key].setValue(true);
				this.numOfChecked++;
			}
		}

		this.valid = true;
		this.validityChanged.emit(this.valid);

		this.setMessage(form);
		this.effectTypesChanged.emit(form);
	}

	checkNone(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == true){
				form.controls[key].setValue(false);
				this.numOfChecked--;
			}
		}

		this.valid = false;
		this.validityChanged.emit(this.valid);

		this.setMessage(form);
		this.effectTypesChanged.emit(form);
	}

}
