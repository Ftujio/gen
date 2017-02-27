import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

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

	constructor(private formService: FormService) {
		this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
			}
		);

		/*this.data = [
			{
				description: "autism"
			},
			{
				description: "intelectual disability"
			},
			{
				description: "unaffected"
			},
		]*/
	}

	ngOnInit() {
		
	}

	onSubmit(form: NgForm){
		console.log(form.value);
	}

	setMessage(){
		/*if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else if(this.numOfChecked < this.data['length']){
			this.message = 'Check all the checkboxes';
		} else {
			this.message = 'All the checkboxes are checked';
		}*/

		if(this.numOfChecked == 0){
			this.message = 'Check at leas one checkbox';
		} else {
			this.message = '';
		}
	}

	checkStatus(form: NgForm){
		this.numOfChecked = 0;

		for(let key in form.value){
			let value = form.value[key];
			//console.log("\"", key, "\"", ": \"", value, "\"");
			if(value == true){
				this.numOfChecked++;
			}
		}

		this.setMessage();
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

		this.setMessage();
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

		this.setMessage();
		this.phenotypeChanged.emit(form);
	}

}
