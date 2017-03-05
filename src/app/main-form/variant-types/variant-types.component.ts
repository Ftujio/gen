import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-variant-types',
  templateUrl: './variant-types.component.html',
  styleUrls: ['./variant-types.component.css', '../css/form.css'],
  outputs: ['variantTypesChanged']
})
export class VariantTypesComponent implements OnInit {

	variantTypesChanged = new EventEmitter<Object>();

	data: Object;
	message: String = '';

	form: FormGroup;

	constructor(private formService: FormService, public fb: FormBuilder) {
		this.formService.getVariantTypes().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
			}
		);

		this.form = this.fb.group({
			checkboxes: this.fb.group({
				sub: [''],
				ins: [''],
				del: ['']
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

		this.variantTypesChanged.emit(this.form);
	}

	checkAll(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value == ''){
				this.form.controls['checkboxes']['controls'][key].setValue(true);
			}
		}

		this.setMessage();
		this.variantTypesChanged.emit(this.form);
	}

	checkNone(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value){
				this.form.controls['checkboxes']['controls'][key].setValue(false);
			}
		}

		this.setMessage();
		this.variantTypesChanged.emit(this.form);
	}

}
