import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {

	value: Object = {};

	constructor() { }

	ngOnInit() {
	}

	handlePhenotype(form){
		this.value = form.value;
	}

}
