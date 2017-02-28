import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: any;
	display: boolean = true;
	valid: boolean = false;
	trueValid: boolean = false;

	constructor() {
		this.value = {
			"genes": "",
			"phenotype": "",
			"child-gender": "",
			"variant-types": "",
			"study-types": "",
			"effect-types": "",
			"valid": ""
		};
	}

	ngOnInit() {
	}

	// BEGIN of output event handlers
	handlePhenotype(form){
		this.value['phenotype'] = form.value;
	}

	handleChildGender(form){
		this.value['child-gender'] = form.value;
	}

	handleVariantTypes(form){
		this.value['variant-types'] = form.value;
	}

	handleStudyTypes(form){
		this.value['study-types'] = form.value;
	}

	handleEffectTypes(form){
		this.value['effect-types'] = form.value;
	}

	handleValidity(valid){
		console.log(valid);
		this.valid = true;
		if(!valid){
			this.valid = valid;
		}
	}
	// END

	submitForm(formValue){
		console.log(formValue);
		if(this.valid){
			this.trueValid = true;
			this.display = false;
		}
	}

}
