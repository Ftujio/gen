import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm, AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
	numOfChecked: number = 0;

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
		console.log('setMessage() fired!');
		console.log(this.phenotypeForm.status);

		if(this.phenotypeForm.status == 'VALID'){
			this.message = '';
			console.log(this.message);
		} else {
			this.message = 'At lest one is required!';
			console.log(this.message);
		}
	}

	checkAll(){
		/*for(let key in form.value){
			let value = form.value[key];
			if(value == false || value == undefined){
				form.controls[key].setValue(true);
				this.numOfChecked++;
			}
		}*/
	}

	checkNone(form: NgForm){
		/*for(let key in form.value){
			let value = form.value[key];
			if(value == true){
				form.controls[key].setValue(false);
				this.numOfChecked--;
			}
		}*/
	}

}
