import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: any;
	display: boolean = false;
	validForms: Array<string> = ['INVALID', 'INVALID', 'INVALID', 'INVALID', 'INVALID'];

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

	handleValidity(value, num){
		num -= 1;
		this.validForms[num] = value;
		console.log(this.validForms);

		this.display = true;
		for(let elem in this.validForms){
			if(this.validForms[elem] == 'INVALID'){
				this.display = false;
			}
		}
	}

	ngOnInit() {
	}

	submitForm(formValue){
		if(this.display){
			this.value['valid'] = true;
		}
		console.log(this.value);
	}

}
