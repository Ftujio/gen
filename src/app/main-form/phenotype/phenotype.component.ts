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
	numOfChecked: number = 0;
	message: String;

	phenotypeForm;

	/*phenotypeForm = new FormGroup({
		autism: new FormControl(),
		congenital_heart_disease: new FormControl(),
		epilepsy: new FormControl(),
		intelectual_disability: new FormControl(),
		schizophrenia: new FormControl(),
		unaffected: new FormControl()
	});*/

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

	checkboxRequired(group){
		var valid = false;

  		for (let name in group.controls) {
  			var val = group.controls[name].value;
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

	setMessage(form: NgForm){
		if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else {
			this.message = '';
		}
	}

	checkStatus(form: NgForm){
		this.numOfChecked = 0;
		console.log(form);

		for(let key in form.value){
			let value = form.value[key];
			//console.log("\"", key, "\"", ": \"", value, "\"");
			if(value == true){
				this.numOfChecked++;
			}
		}

		this.setMessage(form);
		this.phenotypeChanged.emit(form);
	}

	checkAll(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == false || value == undefined){
				form.controls[key].setValue(true);
				this.numOfChecked++;
			}
		}

		this.setMessage(form);
		this.phenotypeChanged.emit(form);
	}

	checkNone(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == true){
				form.controls[key].setValue(false);
				this.numOfChecked--;
			}
		}

		this.setMessage(form);
		this.phenotypeChanged.emit(form);
	}

}
