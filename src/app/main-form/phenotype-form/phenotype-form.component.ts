import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phenotype-form',
  templateUrl: './phenotype-form.component.html',
  styleUrls: ['./phenotype-form.component.css']
})
export class PhenotypeFormComponent implements OnInit {

	data: Object;
	numOfChecked: number = 0;
	message: String = 'Check at least one checkbox';

	constructor(private formService: FormService) {
		/*this.formService.getPhenotypes().subscribe(
			data => {
				this.data = data.data;
				//console.log(this.data);
			}
		);*/

		this.data = [
			{
				description: "autism"
			},
			{
				description: "intelectual disability"
			},
			{
				description: "unaffected"
			},
		]
	}

	ngOnInit() {
		
	}

	onSubmit(form: NgForm){
		console.log(form.value);
	}

	setMessage(){
		if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else if(this.numOfChecked < 3){ // Change to the length of the fetched data
			this.message = 'Check all the checkboxes';
		} else {
			this.message = 'All the checkboxes are checked';
		}
	}

	checkStatus(form: NgForm){
		this.numOfChecked = 0;
		console.log('before: ', this.numOfChecked);

		for(let key in form.value){
			let value = form.value[key];
			//console.log("\"", key, "\"", ": \"", value, "\"");
			if(value == true){
				this.numOfChecked++;
			}
		}

		this.setMessage();

		console.log('after: ', this.numOfChecked);
	}

}
