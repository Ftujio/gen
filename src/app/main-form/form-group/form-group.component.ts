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

	handleValidity(valid){
		console.log(valid);
	}

	ngOnInit() {
	}

	submitForm(formValue){


		this.display = true;
		console.log(this.value);
	}

}
