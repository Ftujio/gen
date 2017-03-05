import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-gender',
  templateUrl: './child-gender.component.html',
  styleUrls: ['./child-gender.component.css', '../css/form.css'],
  outputs: ['childGenderChanged']
})
export class ChildGenderComponent implements OnInit {

	childGenderChanged = new EventEmitter<Object>();

	data: Object;
	message: String = '';
	form: FormGroup;

	constructor(private formService: FormService, public fb: FormBuilder) {
		this.formService.getChildGender().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
			}
		);

		this.form = this.fb.group({
			checkboxes: this.fb.group({
				male: [''],
				female: ['']
			}, {validator: this.checkboxRequired})
		});

		console.log(this.form);
	}

	checkboxRequired(group: FormGroup){
		let valid = false;

  		for (let name in group.controls) {
  			let val = group.controls[name].value;
			if (val) {
				valid = true;
				break;
			}
		}

		if (valid) {
			return null;
		}

		return {
			checkboxRequired: true
		};
	}

	ngOnInit() {
	}

	onSubmit(){
		console.log('form submited!');
		console.log(this.form);
	}

	setMessage(){
		if(this.form.status == 'VALID'){
			this.message = '';
		} else {
			this.message = 'At lest one is required!';
		}

		this.childGenderChanged.emit(this.form);
	}

	checkAll(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value == ''){
				this.form.controls['checkboxes']['controls'][key].setValue(true);
			}
		}

		this.childGenderChanged.emit(this.form);
	}

	checkNone(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value){
				this.form.controls['checkboxes']['controls'][key].setValue(false);
			}
		}

		this.childGenderChanged.emit(this.form);
	}

}
