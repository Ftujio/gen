import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value;

	constructor() {
		this.value = {
			"genes": "",
			"phenotype": "",
			"child-gender": "",
			"variant-types": "",
			"study-types": "",
			"effect-types": ""
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
	// END

	submitForm(formValue){
		console.log(formValue);
	}

}
