import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-gender',
  templateUrl: './child-gender.component.html',
  styleUrls: ['./child-gender.component.css', '../css/form.css'],
  outputs: ['childGenderChanged', 'validityChanged']
})
export class ChildGenderComponent implements OnInit {

	childGenderChanged = new EventEmitter<Object>();
	validityChanged = new EventEmitter<boolean>();

	data: Object;
	numOfChecked: number = 0;
	message: String;
	valid: boolean = false;

	constructor(private formService: FormService) {
		this.formService.getChildGender().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
			}
		);
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
		this.childGenderChanged.emit(form);
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
		this.childGenderChanged.emit(form);
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
		this.childGenderChanged.emit(form);
	}

}
