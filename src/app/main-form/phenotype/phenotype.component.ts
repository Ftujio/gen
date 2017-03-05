import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phenotype',
  templateUrl: './phenotype.component.html',
  styleUrls: ['./phenotype.component.css', '../css/form.css'],
  outputs: ['phenotypeChanged']
})
export class PhenotypeComponent implements OnInit {

	phenotypeChanged = new EventEmitter<Object>();

	data: Object;
	message: String = '';

	phenotypeForm: FormGroup;

	constructor(private formService: FormService, public fb: FormBuilder) {
		this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
			}
		);

		this.phenotypeForm = this.fb.group({
			checkboxes: this.fb.group({
				autism: [''],
				congenital_heart_disease: [''],
				epilepsy: [''],
				intelectual_disability: [''],
				schizophrenia: [''],
				unaffected: [''],
			}, {validator: this.checkboxRequired})
		});

		console.log(this.phenotypeForm);
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
		console.log(this.phenotypeForm);
	}

	setMessage(){
		if(this.phenotypeForm.status == 'VALID'){
			this.message = '';
		} else {
			this.message = 'At lest one is required!';
		}

		this.phenotypeChanged.emit(this.phenotypeForm);
	}

	checkAll(){
		for(let key in this.phenotypeForm.value.checkboxes){
			let value = this.phenotypeForm.value.checkboxes[key];
			if(value == ''){
				this.phenotypeForm.controls['checkboxes']['controls'][key].setValue(true);
			}
		}
	}

	checkNone(){
		for(let key in this.phenotypeForm.value.checkboxes){
			let value = this.phenotypeForm.value.checkboxes[key];
			if(value){
				this.phenotypeForm.controls['checkboxes']['controls'][key].setValue(false);
			}
		}
	}

}
