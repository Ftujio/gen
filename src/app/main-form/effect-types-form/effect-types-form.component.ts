import { Component, OnInit } from '@angular/core';

import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-effect-types-form',
  templateUrl: './effect-types-form.component.html',
  styleUrls: ['./effect-types-form.component.css', '../css/form.css']
})
export class EffectTypesFormComponent implements OnInit {

	data;
	numOfChecked: number = 0;
	message: String = 'Check at least one checkbox';
	formLength: number = 0;

	constructor(private formService: FormService) {
		this.formService.getEffectTypes().subscribe(
			data => {
				this.data = data;
				//console.log(this.data);
				for(let a in this.data){
					this.formLength += this.data[a].data.length;
				}
			}
		);
	}

	ngOnInit() {
		
	}

	onSubmit(form: NgForm){
		console.log(form.value);
	}

	setMessage(form: NgForm){
		if(this.numOfChecked == 0){
			this.message = 'Check at least one checkbox';
		} else if(this.numOfChecked < this.formLength){
			this.message = 'Check all the checkboxes';
		} else {
			this.message = 'All the checkboxes are checked';
		}
	}

	checkStatus(form: NgForm){
		this.numOfChecked = 0;

		console.log(form.value);
		console.log('num: ', this.numOfChecked);

		for(let key in form.value){
			let value = form.value[key];
			//console.log("\"", key, "\"", ": \"", value, "\"");
			if(value == true){
				this.numOfChecked++;
			}
		}

		this.setMessage(form);
	}

	checkAll(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == false || value == undefined){
				form.controls[key].setValue(true);
				this.numOfChecked++;
			}
		}

		this.setMessage(form);
	}

	checkNone(form: NgForm){
		for(let key in form.value){
			let value = form.value[key];
			if(value == true){
				form.controls[key].setValue(false);
				this.numOfChecked--;
			}
		}

		this.setMessage(form);
	}

}
