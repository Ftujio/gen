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
		if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else if(this.numOfChecked < this.data['length']){
			this.message = 'Check all the checkboxes';
		} else {
			this.message = 'All the checkboxes are checked';
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
	}

}
