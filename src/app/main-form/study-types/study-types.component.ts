import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-study-types',
  templateUrl: './study-types.component.html',
  styleUrls: ['./study-types.component.css', '../css/form.css'],
  outputs: ['studyTypesChanged']
})
export class StudyTypesComponent implements OnInit {

	studyTypesChanged = new EventEmitter<Object>();

	data: Object;
	message: String = '';

	form: FormGroup;

	constructor(private formService: FormService, public fb: FormBuilder) {
		this.formService.getStudyTypes().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
			}
		);

		this.form = this.fb.group({
			checkboxes: this.fb.group({
				WE: [''],
				TG: ['']
			}, {validator: this.checkboxRequired})
		});
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

		this.studyTypesChanged.emit(this.form);
	}

	checkAll(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value == ''){
				this.form.controls['checkboxes']['controls'][key].setValue(true);
			}
		}

		this.studyTypesChanged.emit(this.form);
	}

	checkNone(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value){
				this.form.controls['checkboxes']['controls'][key].setValue(false);
			}
		}

		this.studyTypesChanged.emit(this.form);
	}

}
