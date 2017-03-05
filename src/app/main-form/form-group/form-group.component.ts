import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: any;
	display: boolean = false;

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
		this.value['phenotype'] = form.value.checkboxes;
	}

	handleChildGender(form){
		this.value['child-gender'] = form.value.checkboxes;
	}

	handleVariantTypes(form){
		this.value['variant-types'] = form.value.checkboxes;
	}

	handleStudyTypes(form){
		this.value['study-types'] = form.value.checkboxes;
	}

	handleEffectTypes(form){
		this.value['effect-types'] = form.value.checkboxes;
	}
	// END

	submitForm(formValue){
		this.display = true;
		console.log(this.value);
	}

}
