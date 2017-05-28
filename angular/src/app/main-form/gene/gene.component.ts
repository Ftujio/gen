import { Component, EventEmitter, OnInit, Input } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

	@Input() formValue: any;
	form: FormGroup;
	message: string = '';

	constructor(public fb: FormBuilder){
		this.form = this.fb.group({
			radio: this.fb.group({
				'gene': ['']
			}, {validator: this.radioRequired})
		});
	}

	radioRequired(group){
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

	setMessage(){
		if(this.form.status == 'VALID'){
			this.message = '';
		} else {
			this.message = 'At lest one is required!';
		}

		this.formValue['genes'] = this.form.value.radio.gene;
	}

	ngOnInit(){}

	onSubmit(){
		console.log(this.form);
	}

}
