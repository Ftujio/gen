import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: Object = {
		"phenotype": "",
		"child-gender": "",
		"variant-types": "",
		"study-types": "",
		"effect-types": "",
	}

	constructor() { }

	ngOnInit() {
	}

	handlePhenotype(form){
		this.value['phenotype'] = form.value;
	}

}
