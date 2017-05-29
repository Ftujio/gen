import { Component, EventEmitter, OnInit, Input } from '@angular/core';

import { FormService } from '../services/form.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-variant-types',
  templateUrl: './variant-types.component.html',
  styleUrls: ['./variant-types.component.css', '../css/form.css'],
  outputs: ['validityChanged']
})
export class VariantTypesComponent implements OnInit {

	validityChanged = new EventEmitter<string>();

	@Input() formValue: any;
	data: Object;
	message: String = '';

	form: FormGroup;

	constructor(private formService: FormService, public fb: FormBuilder) {
		this.formService.getVariantTypes().subscribe(
			data => {
				this.data = data.data;
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

		this.formValue['variant-types'] = this.form.value['checkboxes'];

		this.validityChanged.emit(this.form.status);
	}

	checkAll(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value == ''){
				this.form.controls['checkboxes']['controls'][key].setValue(true);
			}
		}

		this.setMessage();
	}

	checkNone(){
		for(let key in this.form.value.checkboxes){
			let value = this.form.value.checkboxes[key];
			if(value){
				this.form.controls['checkboxes']['controls'][key].setValue(false);
			}
		}

		this.setMessage();
	}

}
